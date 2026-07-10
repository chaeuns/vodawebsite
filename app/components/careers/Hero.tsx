import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-1 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.1s forwards; }
        .hero-fade-2 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.3s forwards; }
        .hero-fade-3 { opacity: 0; animation: heroFadeUp 0.7s ease-out 0.5s forwards; }
      `}</style>

      <section
        className="relative flex items-center pt-16 overflow-hidden bg-[#0D1B40]"
        style={{ minHeight: 640 }}
      >
        <Image
          src="/images/career_hero_image.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,27,64,0.88) 0%, rgba(13,27,64,0.55) 45%, rgba(13,27,64,0.25) 100%)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-6 py-[60px] md:py-[100px]">
          <p
            style={{ letterSpacing: "2px" }}
            className="hero-fade-1 text-[#60A5FA] text-[12px] font-semibold uppercase"
          >
            RECRUIT NOW
          </p>

          <h1 className="hero-fade-2 font-bold mt-4 leading-[1.3] text-[32px] md:text-[52px] break-keep">
            <span
              style={{
                background: "linear-gradient(to right, #ffffff, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              기술로 배움의 한계를 넘어서는 여정,
            </span>
            <br />
            <span className="text-white">당신을 기다립니다</span>
          </h1>

          <p className="hero-fade-3 text-[#93C5FD] mt-5 leading-[1.6] text-[15px] md:text-[18px] max-w-[90%] md:max-w-[520px]">
            AI와 교육 기술로 세상을 변화시키는
            <br />
            VODA에서 당신의 역량을 발휘해보세요.
          </p>
        </div>
      </section>
    </>
  );
}
