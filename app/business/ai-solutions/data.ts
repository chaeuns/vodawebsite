export type Solution = {
  category: string;
  title: string;
  body: string;
  linkLabel: string;
  highlight?: boolean;
};

export const solutions: Solution[] = [
  {
    category: "Enterprise AI",
    title: "기업 맞춤형 AI 챗봇",
    body: "업무 자동화, 고객 응대, 사내 지식 검색 등 기업 특화 AI 챗봇 서비스를 맞춤 개발합니다.",
    linkLabel: "도입 문의 →",
  },
  {
    category: "Groupware",
    title: "AI 기반 그룹웨어",
    body: "AI가 내장된 차세대 협업 플랫폼. 일정 관리, 문서 자동화, 회의 요약 등 스마트 업무 환경을 구축합니다.",
    linkLabel: "도입 문의 →",
  },
  {
    category: "sLLM",
    title: "보안 특화 sLLM 개발",
    body: "사내 보안을 위한 소형 언어 모델(sLLM) 개발. 데이터가 외부로 나가지 않는 온프레미스 AI 솔루션을 제공합니다.",
    linkLabel: "도입 문의 →",
  },
  {
    category: "Physical AI",
    title: "Physical AI sLLM",
    body: "센서, 로봇, 엣지 디바이스와 결합하는 Physical AI용 sLLM 모델을 개발합니다. 스마트 팩토리·물류 자동화에 최적화되어 있습니다.",
    linkLabel: "도입 문의 →",
  },
  {
    category: "EdTech",
    title: "AI 역량평가 시스템",
    body: "필기·음성 인식 기반 부정행위 방지, 학습자 역량 진단, 맞춤형 피드백을 제공하는 AI 평가 플랫폼입니다.",
    linkLabel: "솔루션 보기 →",
    highlight: true,
  },
  {
    category: "Platform",
    title: "교육 플랫폼 개발",
    body: "LMS, 메타버스 교육장, 출결 관리 시스템 등 교육 기관 맞춤형 통합 플랫폼을 구축합니다.",
    linkLabel: "솔루션 보기 →",
    highlight: true,
  },
];

export type ProcessStep = { step: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 1",
    title: "요구사항 분석",
    body: "비즈니스 목표와 기술 요구사항을 정밀하게 분석하여 최적의 솔루션 방향을 도출합니다.",
  },
  {
    step: "STEP 2",
    title: "설계 및 기획",
    body: "시스템 아키텍처 설계, UI/UX 기획, 개발 로드맵을 수립하고 고객과 함께 확인합니다.",
  },
  {
    step: "STEP 3",
    title: "개발",
    body: "애자일 방식의 스프린트 개발로 빠르게 구현하고 정기적으로 진행 상황을 공유합니다.",
  },
  {
    step: "STEP 4",
    title: "테스트",
    body: "기능·성능·보안 테스트를 통해 품질을 검증하고 고객 수락 테스트(UAT)를 진행합니다.",
  },
  {
    step: "STEP 5",
    title: "배포 및 유지보수",
    body: "안정적인 배포 후 지속적인 모니터링과 기술 지원으로 운영을 함께합니다.",
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

export type RelatedSolution = { badge: string; title: string; body: string };

export const relatedSolutions: RelatedSolution[] = [
  {
    badge: "LMS",
    title: "LMS 문의",
    body: "VODA 스마트 훈련 플랫폼(WSTS)에 대한 도입 및 커스터마이징 문의",
  },
  {
    badge: "Competency",
    title: "역량평가 문의",
    body: "AI 기반 역량평가 시스템 도입, 파일럿 프로그램 및 데모 체험 신청",
  },
  {
    badge: "Cloud",
    title: "클라우드 문의",
    body: "클라우드 인프라 구축, 마이그레이션, 운영 유지보수 서비스 문의",
  },
];
