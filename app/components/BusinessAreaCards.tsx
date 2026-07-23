/* ─────────────────────────────────────────────
   VODA Campus — 사업 영역 카드 섹션 (v4)
   · 도형(CSS 블롭) → 첨부 일러스트 이미지로 교체
   · 이미지 자체가 카드 전체 배경(연한 블루 그라데이션 + 우하단 3D 아이콘)
     이므로 카드 크기에 꽉 채우고, 텍스트만 그 위에 얹는 구조
   · hover 시:
     - 이미지 살짝 확대(zoom) + 밝기 상승
     - 우하단 라이트 스팟이 미세하게 이동 (기존 코드의 .light 유지)
     - 설명/버튼 reveal (기존 동작 유지)
   ───────────────────────────────────────────── */

import Container from "@/app/components/Container";

const AREAS = [
  {
    id: "education",
    title: "교육 사업",
    eng: "Education",
    desc: "정부·기업 대상 AI 및 디지털 역량 강화 교육 설계·운영합니다",
    image: "/images/mainpage/business_area/edu.png",
    buttons: [
      { label: "정부교육", href: "/business/curriculum" },
      { label: "기업교육", href: "/business/corporate-education" },
    ],
  },
  {
    id: "ai-solution",
    title: "AI 솔루션",
    eng: "AI Solution",
    desc: "VODA AI 기반의 학습·업무 솔루션을 개발하고 공급합니다.",
    image: "/images/mainpage/business_area/ai-sol.png",
    buttons: [{ label: "자세히 보기", href: "/business/ai-solutions" }],
  },
  {
    id: "ai-cert",
    title: "AI 자격인증",
    eng: "AI Certification",
    desc: "AI 실무 역량을 검증하는 자격 인증 과정을 운영합니다.",
    image: "/images/mainpage/business_area/cert.png",
    buttons: [{ label: "자세히 보기", href: "/business/ai-certification" }],
  },
  {
    id: "cloud",
    title: "클라우드",
    eng: "Cloud",
    desc: "안정적인 클라우드 인프라 구축과 운영 서비스를 제공합니다.",
    image: "/images/mainpage/business_area/cloud.png",
    buttons: [{ label: "자세히 보기", href: "/services/cloud" }],
  },
  {
    id: "consulting",
    title: "컨설팅",
    eng: "Consulting",
    desc: "교육·DX 전략 수립부터 실행까지 전 과정을 함께합니다.",
    image: "/images/mainpage/business_area/consulting.png",
    buttons: [{ label: "자세히 보기", href: "/business/consulting" }],
  },
];

export default function BusinessAreaCards() {
  return (
    <section className="voda-biz">
      <style>{`
        .voda-biz {
          --navy-deep: #0B1130;
          --blue: #3D5AFE;
          --blue-soft: #8FA6FF;
          --blue-hover: #2E48E0;
          --card-bg: #F3F6FB;
          --card-bg-hover: #FAFCFF;
          --card-border: #E4E9F2;
          --text-primary: #0E1B52;
          --text-secondary: #5A6895;
          background: #FFFFFF;
          padding: 112px 24px;
        }

        .voda-biz__head { margin: 0 0 48px; }

        .voda-biz__grid {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;
        }

        /* ── 카드 ───────────────────────── */
        .biz-card {
          position: relative;
          aspect-ratio: 5 / 8;
          container-type: inline-size;
          border-radius: 20px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: border-color .3s ease, box-shadow .3s ease;
        }
        .biz-card:hover,
        .biz-card:focus-within {
          border-color: rgba(61, 90, 254, .35);
          box-shadow: 0 10px 28px rgba(11, 17, 48, .1);
        }

        /* ── 배경 일러스트(첨부 이미지) ───────────────
           이미지 자체가 카드 전체 배경 + 우하단 아이콘을 담고 있어
           카드에 꽉 채워 넣고, hover 시 살짝 확대 + 밝기 상승 */
        .biz-card__art {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .biz-card__art img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transform: scale(1);
          filter: brightness(1);
          transition: transform .5s ease, filter .5s ease;
        }
        .biz-card:hover .biz-card__art img,
        .biz-card:focus-within .biz-card__art img {
          transform: scale(1.045);
          filter: brightness(1.06);
        }

        /* 우하단 라이트 스팟 — hover 시 미세하게 이동 (기존 .light 계승) */
        .biz-card__art .light {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 78% 82%, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 42%);
          transition: transform .5s ease, opacity .5s ease;
          opacity: .0;
        }
        .biz-card:hover .biz-card__art .light,
        .biz-card:focus-within .biz-card__art .light {
          opacity: 1;
          transform: translate(-6px, -8px);
        }

        /* 카드 하단부를 살짝 어둡게 깔아 텍스트 대비 확보 — hover 시에만 노출 */
        .biz-card__scrim {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 55%;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 68%, rgba(255,255,255,.85) 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity .4s ease;
        }
        .biz-card:hover .biz-card__scrim,
        .biz-card:focus-within .biz-card__scrim {
          opacity: 1;
        }

        /* ── 텍스트 영역 ─────────────────── */
        .biz-card__body {
          position: relative; z-index: 1;
          padding: clamp(14px, 10cqi, 28px);
          width: 100%;
          transform: translateY(-55px);
          transition: transform .4s ease;
        }
        .biz-card:hover .biz-card__body,
        .biz-card:focus-within .biz-card__body {
          transform: translateY(-18px);
        }
        .biz-card__name {
          margin: 0;
          font-size: clamp(20px, 13cqi, 30px); font-weight: 800;
          letter-spacing: -0.01em;
          color: #449CFF;
        }
        /* 카드 전체를 탭/클릭 가능하게 만드는 스트레치드 링크.
           개별 버튼(.biz-btn)은 z-index로 위에 떠서 각자의 링크를 유지함 */
        .biz-card__name-link {
          color: inherit;
          text-decoration: none;
        }
        .biz-card__name-link::after {
          content: "";
          position: absolute;
          inset: 0;
        }
        .biz-card__eng {
          margin: 0 0 4px;
          font-size: clamp(9px, 5cqi, 11px); font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .biz-card__reveal {
          max-height: 0; opacity: 0;
          overflow: hidden;
          transition: max-height .28s ease, opacity .28s ease, margin-top .28s ease;
          margin-top: 0;
        }
        .biz-card:hover .biz-card__reveal,
        .biz-card:focus-within .biz-card__reveal {
          max-height: 240px; opacity: 1; margin-top: 12px;
        }
        .biz-card__desc {
          margin: 0;
          font-size: clamp(11px, 6.2cqi, 14.5px); line-height: 1.6;
          font-weight: 400;
          color: var(--text-secondary);
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .biz-card:hover .biz-card__desc,
        .biz-card:focus-within .biz-card__desc {
          font-weight: 500;
        }

        /* 버튼 */
        .biz-card__actions {
          display: flex; flex-direction: column; align-items: stretch; gap: clamp(5px, 3cqi, 8px);
          margin-top: clamp(29px, calc(14cqi + 5px), 41px);
        }
        .biz-btn {
          position: relative;
          z-index: 2;
          display: inline-flex; align-items: center; justify-content: space-between;
          gap: clamp(6px, 4cqi, 10px);
          width: 100%;
          padding: clamp(7px, 4cqi, 11px) clamp(14px, 8cqi, 22px);
          border-radius: 999px;
          background: var(--blue);
          color: #FFFFFF;
          font-size: clamp(11px, 5.5cqi, 14px); font-weight: 600;
          text-decoration: none;
          border: none; cursor: pointer;
          transition: background .18s ease, transform .18s ease;
        }
        .biz-btn:hover { background: var(--blue-hover); }
        .biz-btn:active { transform: scale(.98); }
        .biz-btn:focus-visible { outline: 2px solid var(--navy-deep); outline-offset: 2px; }
        .biz-btn__arrow { font-size: 1.1em; line-height: 1; }

        /* 반응형 — 카드 비율은 유지한 채, 열 수만 바뀌면서 텍스트는 cqi 단위로 자동 스케일 */
        @media (max-width: 1100px) {
          .voda-biz__grid { grid-template-columns: repeat(2, 1fr); }
          .biz-card { aspect-ratio: 6 / 5; }
          .biz-card__body { transform: translateY(-25px); }
          .biz-card:hover .biz-card__body,
          .biz-card:focus-within .biz-card__body {
            transform: translateY(-2px);
          }
        }
        @media (max-width: 640px) {
          /* 모바일은 이미지가 카드 전체를 채우고 제목만 얹는 형태로 단순화.
             설명/버튼은 숨기고 카드 전체(제목 링크)를 눌러 이동 → 스크롤이 끝없이 길어지지 않음 */
          .voda-biz { padding: 56px 16px; }
          .voda-biz__grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .biz-card { aspect-ratio: 4 / 5; }

          .biz-card__body,
          .biz-card:hover .biz-card__body,
          .biz-card:focus-within .biz-card__body {
            transform: translateY(0);
            padding: 12px;
          }
          .biz-card__eng { display: none; }
          .biz-card__name { font-size: 17px; }
          .biz-card__reveal,
          .biz-card:hover .biz-card__reveal,
          .biz-card:focus-within .biz-card__reveal {
            display: none;
          }
          .biz-card__desc { display: none; }

          /* 바로가기가 2개인 교육 사업 카드는 예외적으로 가장 크게(전체 폭) 배치하고,
             연한 스타일의 링크 2개를 함께 노출. 나머지 4개는 그 아래 2x2로 배치 */
          .biz-card--hero {
            grid-column: 1 / -1;
            aspect-ratio: 16 / 8;
          }
          .biz-card--hero .biz-card__name { font-size: 21px; }
          .biz-card--hero .biz-card__reveal,
          .biz-card--hero.biz-card:hover .biz-card__reveal,
          .biz-card--hero.biz-card:focus-within .biz-card__reveal {
            display: block;
            margin-top: 8px;
          }
          .biz-card--hero .biz-card__actions {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
            margin-top: 0;
          }
          .biz-card--hero .biz-btn {
            width: auto;
            flex: 0 0 auto;
            background: rgba(255, 255, 255, .6);
            color: var(--text-primary);
            font-weight: 600;
            padding: 6px 14px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .biz-card, .biz-card__art img, .biz-card__art .light, .biz-card__reveal, .biz-btn { transition: none; }
        }
      `}</style>

      <Container>
        <div className="voda-biz__head pl-20 pr-20">
          <span className="block w-9 h-1 rounded-full bg-[#3566e8] mb-3" />
          <h2
            className="font-extrabold font-suit text-[#0e1b52]"
            style={{
              fontSize: "clamp(1.7rem,3.2vw,2.8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            사업 영역
          </h2>
        </div>

        <div className="voda-biz__grid pl-20 pr-20">
          {AREAS.map((area) => (
            <article
              className={`biz-card${area.buttons.length > 1 ? " biz-card--hero" : ""}`}
              key={area.id}
            >
              <div className="biz-card__art">
                <img src={area.image} alt="" aria-hidden="true" />
                <div className="light" />
                <div className="biz-card__scrim" />
              </div>
              <CardBody area={area} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CardBody({ area }: { area: (typeof AREAS)[number] }) {
  return (
    <div className="biz-card__body">
      <p className="biz-card__eng">{area.eng}</p>
      <h3 className="biz-card__name">
        <a className="biz-card__name-link" href={area.buttons[0].href}>
          {area.title}
        </a>
      </h3>
      <div className="biz-card__reveal">
        <p className="biz-card__desc">{area.desc}</p>
        <div className="biz-card__actions">
          {area.buttons.map((btn) => (
            <a key={btn.label} className="biz-btn" href={btn.href}>
              {btn.label}
              <span className="biz-btn__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
