export type Solution = {
  category: string;
  title: string;
  body: string;
};

export const solutions: Solution[] = [
  {
    category: "Enterprise AI",
    title: "기업 맞춤형 AI 챗봇",
    body: "업무 자동화, 고객 응대, 사내 지식 검색 등 기업 특화 AI 챗봇 서비스를 맞춤 개발",
  },
  {
    category: "Groupware",
    title: "AI 기반 그룹웨어",
    body: "AI가 내장된 차세대 협업 플랫폼. 일정 관리, 문서\n자동화, 회의 요약 등 스마트 업무 환경을 구축",
  },
  {
    category: "sLLM",
    title: "보안 특화 sLLM 개발",
    body: "사내 보안을 위한 소형 언어 모델(sLLM) 개발.\n데이터가 외부로 나가지 않는 AI 솔루션을 제공",
  },
  {
    category: "Physical AI",
    title: "Physical AI sLLM",
    body: "센서, 로봇, 엣지 디바이스와 결합하는 Physical\nAI용 sLLM 모델을 개발",
  },
  {
    category: "EdTech",
    title: "AI 역량평가 시스템",
    body: "필기·음성 인식 기반 부정행위 방지, 학습자 역량\n진단, 맞춤형 피드백을 제공하는 AI 평가 플랫폼",
  },
  {
    category: "Platform",
    title: "교육 플랫폼 개발",
    body: "LMS, 메타버스 교육장, 출결 관리 시스템 등\n교육 기관 맞춤형 통합 플랫폼을 구축",
  },
];

export type ProcessStep = { step: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 1",
    title: "요구사항\n분석",
    body: "고객의 니즈·목표 파악",
  },
  {
    step: "STEP 2",
    title: "설계·기획",
    body: "최적의 구조· 사용자 경험 설계",
  },
  {
    step: "STEP 3",
    title: "개발",
    body: "안정적인\n서비스 구현",
  },
  {
    step: "STEP 4",
    title: "테스트",
    body: "다양한\n품질 검증",
  },
  {
    step: "STEP 5",
    title: "배포·유지보수",
    body: "안정적인\n배포·개선\n지원",
  },
];

export type TechStackGroup = { category: string; label: string; items: string[] };

export const techStack: TechStackGroup[] = [
  {
    category: "FRONT END",
    label: "프론트엔드",
    items: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "BACK END",
    label: "백엔드",
    items: ["Node.js", "Python", "Java Spring Boot", "Django"],
  },
  {
    category: "AI / ML",
    label: "AI·머신러닝",
    items: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision"],
  },
  {
    category: "CLOUD",
    label: "클라우드",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    category: "DATABASE",
    label: "데이터베이스",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
];

export type RelatedSolution = { badge: string; title: string; body: string; href: string };

export const relatedSolutions: RelatedSolution[] = [
  {
    badge: "LMS",
    title: "LMS",
    body: "VODA 스마트 훈련 플랫폼(WSTS)에 대한\n도입과 커스터마이징",
    href: "/solutions/lms",
  },
  {
    badge: "Competency",
    title: "AI 역량평가",
    body: "AI 기반 역량평가 시스템 도입\n파일럿 프로그램 및 데모 체험 신청",
    href: "/solutions/assessment",
  },
  {
    badge: "Cloud",
    title: "클라우드 인프라",
    body: "클라우드 인프라 구축, 마이그레이션,\n운영 유지보수 서비스 문의",
    href: "/business/cloud",
  },
];
