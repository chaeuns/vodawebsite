export type Ideology = { icon: string; en: string; ko: string; body: string; highlight: string };

export const ideologies: Ideology[] = [
  {
    icon: "💡",
    en: "Innovative Thinking",
    ko: "혁신적 사고",
    body: "새로운 기술과 방법론으로\n문제를 바라보는 시각을 키웁니다.",
    highlight: "문제를 바라보는 시각",
  },
  {
    icon: "🤝",
    en: "Collaborative Learning",
    ko: "협력적 학습",
    body: "팀 프로젝트와 협업을 통해\n실무 소통 능력을 향상시킵니다.",
    highlight: "실무 소통 능력",
  },
  {
    icon: "🎯",
    en: "Practical Project",
    ko: "실무 지향",
    body: "현장에서 바로 활용 가능한\n실무형 프로젝트 중심으로 교육합니다.",
    highlight: "실무형 프로젝트 중심",
  },
];

export type CourseCategory = "AI/AX 과정" | "보안 과정" | "클라우드 과정" | "생성형AI 과정";

export const categoryColors: Record<CourseCategory, { color: string; bg: string }> = {
  "AI/AX 과정": { color: "#2563EB", bg: "#EFF4FE" },
  "보안 과정": { color: "#1E40AF", bg: "#EAF0FC" },
  "클라우드 과정": { color: "#0EA5E9", bg: "#E8F6FE" },
  "생성형AI 과정": { color: "#6366F1", bg: "#EEF0FE" },
};

export type Course = {
  number: string;
  title: string;
  duration: string;
  badge: string;
  category: CourseCategory;
  description: string;
  tags: string[];
};

export const courses: Course[] = [
  {
    number: "01",
    title: "AI/AX 개발자 과정",
    duration: "6개월",
    badge: "정부지원 KDT",
    category: "AI/AX 과정",
    description:
      "AI 기반 UX/UI 설계부터 풀스택 개발, 클라우드 배포까지\n실무형 AI 개발자를 양성합니다.",
    tags: [
      "AI 기반 UX/UI 설계",
      "풀스택 개발",
      "AI 활용 개발",
      "클라우드 배포 및 운영",
      "데이터베이스 설계",
    ],
  },
  {
    number: "02",
    title: "보안-AI 전문가 과정",
    duration: "6개월",
    badge: "정부지원 KDT",
    category: "보안 과정",
    description:
      "AI 보안 기술과 클라우드 보안을 결합해 \n위협에 선제 대응하는 보안 전문가를 키웁니다.",
    tags: [
      "보안 인프라 구성",
      "AI 보안 기술",
      "클라우드 보안",
      "데이터 보호·위협 대응",
      "보안 솔루션 구축",
    ],
  },
  {
    number: "03",
    title: "클라우드 인프라 과정",
    duration: "4개월",
    badge: "정부지원 KDT",
    category: "클라우드 과정",
    description:
      "인프라 구성부터 AI·AX 솔루션 설계까지,\n클라우드 환경을 직접 운영하는 역량을 기릅니다.",
    tags: [
      "클라우드 배포·운영",
      "인프라 구성·관리",
      "AI·AX 솔루션 설계",
      "데이터 파이프라인",
      "협업·자동화 도구",
    ],
  },
  {
    number: "04",
    title: "생성형 AI 활용 과정",
    duration: "2개월",
    badge: "AI 자격인증 연계",
    category: "생성형AI 과정",
    description:
      "프롬프트 엔지니어링부터 업무 자동화까지,\n생성형 AI를 실무에 바로 적용하는 법을 배웁니다.",
    tags: [
      "생성형 AI 기초·활용",
      "프롬프트 엔지니어링",
      "AI 업무 자동화",
      "AI 역량 자격인증 취득",
    ],
  },
];

export type Field = { number: string; title: string; body: string };

export const fields: Field[] = [
  { number: "01", title: "AI / AX", body: "AI 기반 서비스 설계 및 지능형 시스템 구축" },
  { number: "02", title: "Physical AI", body: "센서·로봇과 결합한 물리 지능 시스템" },
  { number: "03", title: "AI·보안", body: "AI 보안 기술로 데이터 보호 및 위협 대응" },
  { number: "04", title: "풀스택", body: "프론트엔드·백엔드 통합 기술 역량 구축" },
  { number: "05", title: "클라우드", body: "클라우드 네이티브 환경 운영 인프라 설계" },
  { number: "06", title: "인프라", body: "서버·네트워크 등 물리 인프라 구축 및  운영" },
];

export type Partner = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export const partners: Partner[] = [
  {
    title: "LG CNS · AM INSPIRE CAMP",
    description: "AI 시대의 실무 융합형 엔지니어 양성 — LG CNS 채용 가산점, 현직자 멘토링 연계",
    link: "https://lgcnscamp.kr/",
    image: "/images/curriculum/partner-lgcns-v2.png",
  },
  {
    title: "SK쉴더스 · Rookies",
    description: "개발에서 보안까지 실무 역량 완성 — 취업 연계형 지능형 애플리케이션 개발자 양성과정",
    link: "https://ssra.kr/info/security-solution-developer",
    image: "/images/curriculum/partner-skshieldus.png",
  },
];
