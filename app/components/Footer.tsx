
const FOOTER_LINKS = [
  {
    h: "회사",
    links: ["캠퍼스소개", "사업영역", "솔루션", "사업문의"],
  },
  {
    h: "Campus",
    links: ["교육 과정", "수강 신청", "수료생 이야기", "FAQ"],
  },
  {
    h: "뉴스",
    links: ["공지사항", "보도자료", "블로그", "파트너십"],
  },
  {
    h: "채용",
    links: ["채용 공고", "채용 문화", "인재상", "지원하기"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e1b52] text-white">
      <div className="max-w-[1440px] mx-auto px-10 py-14">
        <div className="grid md:grid-cols-[220px_1fr] gap-14 mb-12">
          {/* Logo on navy */}
          <div>
            <img
              src="/voda-logo-color.svg"  
              alt="VODA Works"
              className="h-7 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-xs text-white/45 leading-relaxed">
              AI와 교육이 만나는 곳.
              <br />
              데이터의 가치로 미래를 봅니다.
            </p>
          </div>

          {/* 4-col links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {FOOTER_LINKS.map(({ h, links }) => (
              <div key={h}>
                <h5 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4">
                  {h}
                </h5>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                    <a  
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-white/25">
            © 2026 VODA Works Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            서울특별시 중구 · contact@voda.works
          </p>
        </div>
      </div>
    </footer>
  );
}