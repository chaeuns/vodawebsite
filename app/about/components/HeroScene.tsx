"use client";

/* ═══════════════════════════════════════════════════════════
   VODA About — Hero Scene
   "WE TURN DATA INTO VISION." — U / A(컴퍼스) / O(눈) 유리 오브젝트
   Three.js(r128, CDN)로 렌더링되는 3D 글래스 오브젝트 히어로

   THREE is loaded as an untyped global from a CDN script (not the
   npm package), so `any` is used deliberately for all THREE.* values.
   ═══════════════════════════════════════════════════════════ */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600"],
});

declare global {
  interface Window {
    THREE?: any;
  }
}

type SceneApp = {
  renderer: any;
  scene: any;
  camera: any;
  canvas: HTMLCanvasElement;
  update: ((t: number) => void) | null;
};

export default function HeroScene() {
  const canvasURef = useRef<HTMLCanvasElement>(null);
  const canvasEyesRef = useRef<HTMLCanvasElement>(null);
  const [threeReady, setThreeReady] = useState(false);
  const [noWebgl, setNoWebgl] = useState(false);

  useEffect(() => {
    if (!threeReady) return;
    const THREE = window.THREE;
    if (!THREE) return;

    let cancelled = false;
    let rafId = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function makeEnvCanvas() {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 512;
      const ctx = c.getContext("2d")!;
      const g = ctx.createLinearGradient(0, 0, 0, 512);
      g.addColorStop(0, "#161c30");
      g.addColorStop(0.55, "#0c1122");
      g.addColorStop(1, "#05070f");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1024, 512);

      ctx.filter = "blur(18px)";
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.fillRect(60, 90, 420, 46);
      ctx.fillStyle = "rgba(235,242,255,0.8)";
      ctx.fillRect(620, 60, 340, 34);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillRect(180, 300, 520, 26);
      ctx.filter = "blur(30px)";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(840, 200, 60, 0, Math.PI * 2);
      ctx.fill();
      ctx.filter = "none";
      return c;
    }

    function glassMaterial(extra?: Record<string, unknown>) {
      const m = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.2,
        transmission: 1.0,
        thickness: 1.6,
        ior: 1.45,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.2,
      });
      if (extra) Object.assign(m, extra);
      return m;
    }

    const envCanvas = makeEnvCanvas();
    const apps: SceneApp[] = [];

    function createApp(canvas: HTMLCanvasElement | null, buildFn: (app: SceneApp) => void) {
      if (!canvas) return null;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      } catch {
        setNoWebgl(true);
        return null;
      }
      renderer.setPixelRatio(DPR);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      const scene = new THREE.Scene();

      const envTex = new THREE.CanvasTexture(envCanvas);
      envTex.mapping = THREE.EquirectangularReflectionMapping;
      envTex.encoding = THREE.sRGBEncoding;
      const pmrem = new THREE.PMREMGenerator(renderer);
      pmrem.compileEquirectangularShader();
      const envRT = pmrem.fromEquirectangular(envTex);
      scene.environment = envRT.texture;
      envTex.dispose();
      pmrem.dispose();

      const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 30);
      camera.position.set(0, 0, 5.4);

      const key = new THREE.DirectionalLight(0xffffff, 1.6);
      key.position.set(3, 5, 4);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xdfe8ff, 0.9);
      rim.position.set(-4, -2, -3);
      scene.add(rim);
      scene.add(new THREE.AmbientLight(0xaebadd, 0.4));

      const app: SceneApp = { renderer, scene, camera, canvas, update: null };
      buildFn(app);
      apps.push(app);
      return app;
    }

    // ── U ──────────────────────────────────────────────
    createApp(canvasURef.current, (app) => {
      const W = 0.86, s = 0.4, H = 1.02;
      const shape = new THREE.Shape();
      shape.moveTo(-W, H);
      shape.lineTo(-W, 0);
      shape.absarc(0, 0, W, Math.PI, Math.PI * 2, false);
      shape.lineTo(W, H);
      shape.lineTo(W - s, H);
      shape.lineTo(W - s, 0);
      shape.absarc(0, 0, W - s, 0, Math.PI, true);
      shape.lineTo(-(W - s), H);
      shape.lineTo(-W, H);

      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.6,
        curveSegments: 48,
        bevelEnabled: true,
        bevelThickness: 0.09,
        bevelSize: 0.07,
        bevelSegments: 5,
      });
      geo.center();

      const mesh = new THREE.Mesh(geo, glassMaterial({ thickness: 2.2 }));
      mesh.scale.setScalar(1.15);
      app.scene.add(mesh);

      app.update = (t: number) => {
        mesh.rotation.y = t * 0.9;
        mesh.rotation.x = Math.sin(t * 0.6) * 0.07;
        mesh.position.y = Math.sin(t * 0.8) * 0.04;
      };
    });

    // ── O (눈) ─────────────────────────────────────────
    createApp(canvasEyesRef.current, (app) => {
      const group = new THREE.Group();

      const scleraMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.16,
        transmission: 0.12,
        thickness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.2,
      });
      const pupilMat = new THREE.MeshPhysicalMaterial({
        color: 0x0b0b0f,
        metalness: 0,
        roughness: 0.12,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        envMapIntensity: 1.6,
      });
      const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

      function makeEye(sideX: number, pupilDir: any, spark1Dir: any, spark2Dir: any) {
        const eye = new THREE.Group();
        const rx = 0.74, ry = 1.0, rz = 0.74;
        const sclera = new THREE.Mesh(new THREE.SphereGeometry(1.0, 48, 48), scleraMat);
        sclera.scale.set(rx, ry, rz);
        eye.add(sclera);

        const up = new THREE.Vector3(0, 1, 0);
        function surfaceCap(radius: number, capAngle: number, dir: any, material: any) {
          const geo = new THREE.SphereGeometry(radius, 48, 24, 0, Math.PI * 2, 0, capAngle);
          const q = new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize());
          geo.applyMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(q));
          const m = new THREE.Mesh(geo, material);
          m.scale.set(rx, ry, rz);
          return m;
        }

        eye.add(surfaceCap(1.012, 0.58, pupilDir, pupilMat));
        eye.add(surfaceCap(1.022, 0.13, spark1Dir, sparkMat));
        eye.add(surfaceCap(1.022, 0.065, spark2Dir, sparkMat));

        eye.position.x = sideX;
        return eye;
      }

      // 왼쪽 눈: 기존 좌표 그대로
      group.add(makeEye(
        -0.82,
        new THREE.Vector3(0.48, 0.06, 1),
        new THREE.Vector3(0.32, 0.28, 1),
        new THREE.Vector3(0.64, -0.1, 1)
      ));

      // 오른쪽 눈: 검은자/안광 x값만 살짝 왼쪽으로 (0.48 → 0.30, 0.32 → 0.16, 0.64 → 0.46)
      group.add(makeEye(
        0.82,
        new THREE.Vector3(0.30, 0.06, 1),
        new THREE.Vector3(0.16, 0.28, 1),
        new THREE.Vector3(0.46, -0.1, 1)
      ));
      group.scale.setScalar(1.3);
      app.scene.add(group);

      app.update = (t: number) => {
        group.position.y = Math.sin(t * 0.65 + 1.3) * 0.05;
        group.rotation.z = Math.sin(t * 0.45) * 0.015;
      };
    });

    function sizeAll() {
      apps.forEach((app) => {
        const parent = app.canvas.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const w = Math.max(2, Math.round(rect.width));
        const h = Math.max(2, Math.round(rect.height));
        app.renderer.setSize(w, h, false);
        app.camera.aspect = w / h;
        app.camera.updateProjectionMatrix();
      });
    }

    function renderAll(t: number) {
      apps.forEach((app) => {
        if (app.update) app.update(t);
        app.renderer.render(app.scene, app.camera);
      });
    }

    sizeAll();

    function handleResize() {
      sizeAll();
      if (reduceMotion) renderAll(0.001);
    }
    window.addEventListener("resize", handleResize);

    if (reduceMotion) {
      renderAll(0.001);
    } else {
      const start = performance.now();
      const loop = () => {
        if (cancelled) return;
        const t = (performance.now() - start) / 1000;
        renderAll(t);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) sizeAll();
      });
    }

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      apps.forEach((app) => {
        app.scene.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m: any) => m.dispose());
            else obj.material.dispose();
          }
        });
        app.renderer.dispose();
      });
    };
  }, [threeReady]);

  return (
    <>
      <Script
        id="three-js-cdn"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onReady={() => {
          if (window.THREE) setThreeReady(true);
          else setNoWebgl(true);
        }}
        onError={() => setNoWebgl(true)}
      />
      <section className={`voda-hero-scene ${interTight.className}${noWebgl ? " no-webgl" : ""}`}>
        <h1>
          <span className="line">
            WE T
            <span className="obj-slot">
              <canvas ref={canvasURef} />
              <span className="fallback">U</span>
            </span>
            RN DATA
          </span>
          <span className="line">
            INTO VISI
            <span className="obj-slot wide">
              <canvas ref={canvasEyesRef} />
              <span className="fallback">O</span>
            </span>
            N.
          </span>
        </h1>

        <style>{`
          .voda-hero-scene {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 4vw;
            overflow: hidden;
            background:
              radial-gradient(1200px 700px at 50% 8%, rgba(120, 140, 190, 0.10), transparent 60%),
              radial-gradient(900px 600px at 50% 110%, rgba(70, 90, 140, 0.08), transparent 60%),
              linear-gradient(180deg, #0A1330 0%, #05091A 100%);
            color: #ffffff;
          }
          .voda-hero-scene h1 {
            font-weight: 600;
            font-size: clamp(58px, 10vw, 140px);
            line-height: 1.1;
            letter-spacing: -0.02em;
            color: #ffffff;
            margin: 0;
          }
          .voda-hero-scene h1 .line { display: block; white-space: nowrap; }
          .voda-hero-scene .obj-slot {
            display: inline-block;
            position: relative;
            width: 1.0em;
            height: 1.0em;
            vertical-align: -0.14em;
            margin: 0 0.02em;
          }
          .voda-hero-scene .obj-slot.wide { width: 1.78em; }
          .voda-hero-scene .obj-slot canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 0 26px rgba(210, 225, 255, 0.20));
          }
          .voda-hero-scene .obj-slot .fallback {
            position: absolute; inset: 0;
            display: none;
            color: rgba(255,255,255,0.85);
          }
          .voda-hero-scene.no-webgl .obj-slot canvas { display: none; }
          .voda-hero-scene.no-webgl .obj-slot .fallback { display: block; }
          @media (max-width: 680px) {
            .voda-hero-scene { height: auto; min-height: 100vh; overflow: auto; padding: 18vh 6vw; }
            .voda-hero-scene h1 .line { white-space: normal; }
          }
        `}</style>
      </section>
    </>
  );
}
