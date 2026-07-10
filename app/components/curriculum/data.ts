export type Ideology = { icon: string; en: string; ko: string; body: string; highlight: string };

export const ideologies: Ideology[] = [
  {
    icon: "💡",
    en: "Innovative Thinking",
    ko: "혁신적 사고",
    body: "새로운 기술과 방법론으로 문제를 바라보는 시각을 키웁니다.",
    highlight: "문제를 바라보는 시각",
  },
  {
    icon: "🤝",
    en: "Collaborative Learning",
    ko: "협력적 학습",
    body: "팀 프로젝트와 협업을 통해 실무 소통 능력을 향상시킵니다.",
    highlight: "실무 소통 능력",
  },
  {
    icon: "🎯",
    en: "Practical Project",
    ko: "실무 지향",
    body: "현장에서 바로 활용 가능한 실무형 프로젝트 중심으로 교육합니다.",
    highlight: "실무형 프로젝트 중심",
  },
];

export type CourseCategory = "AI/AX 과정" | "보안 과정" | "클라우드 과정";

export const courseFilters = ["전체", "AI/AX 과정", "보안 과정", "클라우드 과정"] as const;
export type CourseFilter = (typeof courseFilters)[number];

export type Course = {
  title: string;
  duration: string;
  category: CourseCategory;
  curriculum: string[];
};

export const courses: Course[] = [
  {
    title: "AI/AX 개발자 과정",
    duration: "6개월 · 정부지원 KDT",
    category: "AI/AX 과정",
    curriculum: [
      "AI 기반 UX/UI 설계",
      "풀스택(React/Java) 개발",
      "AI 활용 개발",
      "클라우드 배포 및 운영",
      "데이터베이스 설계",
    ],
  },
  {
    title: "보안-AI 전문가 과정",
    duration: "6개월 · 정부지원 KDT",
    category: "보안 과정",
    curriculum: [
      "보안 인프라 구성",
      "AI 보안 기술",
      "클라우드 보안",
      "데이터 보호·위협 대응",
      "보안 솔루션 구축",
    ],
  },
  {
    title: "클라우드 인프라 과정",
    duration: "4개월 · 정부지원 KDT",
    category: "클라우드 과정",
    curriculum: [
      "클라우드 배포 및 운영",
      "인프라 구성·관리",
      "AI·AX 솔루션 설계",
      "데이터 파이프라인",
      "협업·자동화 도구",
    ],
  },
  {
    title: "생성형 AI 활용 과정",
    duration: "2개월 · AI 자격인증 연계",
    category: "AI/AX 과정",
    curriculum: [
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
  { number: "06", title: "인프라", body: "서버·네트워크 등 물리 인프라 구축 및 안정적 운영" },
];

export type Partner = { name: string; description: string };

export const partners: Partner[] = [
  {
    name: "협력 기업명 A",
    description: "AI/AX 개발자 양성과정 협력 — 실무 프로젝트 및 취업 연계",
  },
  {
    name: "협력 기업명 B",
    description: "보안·AI 전문가 양성과정 협력 — 현장 실습 및 인턴십 연계",
  },
  {
    name: "협력 기업명 C",
    description: "생성형 AI 활용 과정 협력 — 사이버보안 전문인력 양성",
  },
];
