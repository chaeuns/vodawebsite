export type Strength = { title: string; body: string };

export const strengths: Strength[] = [
  {
    title: "기업 맞춤형 커리큘럼 설계",
    body: "기업의 업종, 직무, 수준에 따라 커리큘럼을 처음부터 맞춤 설계합니다.\n표준화된 교육이 아닌 귀사만을 위한 교육을 세팅합니다.",
  },
  {
    title: "현직 전문가 강사진",
    body: "IT 현업 경력 10년 이상의 전문 강사진이 직접 교육합니다.\n이론이 아닌 실무 중심의 교육으로 즉시 현장 적용이 가능합니다.",
  },
  {
    title: "교육 효과 데이터 리포트",
    body: "교육 전·후 역량 측정 및 수료 후 데이터 기반 성과 리포트를 제공합니다.\n교육 ROI를 수치로 확인할 수 있습니다.",
  },
  {
    title: "온·오프라인 하이브리드 운영",
    body: "집합교육, 원격교육, 메타버스 교육 등 다양한 방식으로 운영합니다.\n기업 상황에 맞는 최적의 교육 방식을 선택할 수 있습니다.",
  },
];

export type Program = { number: string; title: string; body: string };

export const programs: Program[] = [
  {
    number: "Program 01",
    title: "AI·DX 역량강화",
    body: "• 생성형 AI 업무 적용\n• DX 전략 이해\n• AI 도구 활용 교육\n• 전 직급 대상 맞춤 운영",
  },
  {
    number: "Program 02",
    title: "클라우드·IT 인프라",
    body: "• MS-Office 365\n• 서버 관리\n• 클라우드 운영 실무 중심 교육\n• 실습 환경 제공",
  },
  {
    number: "Program 03",
    title: "데이터 분석·활용",
    body: "• 엑셀 데이터 분석\n• 파이썬 기초\n• BI 도구 활용\n• 비개발자 맞춤 데이터 교육",
  },
  {
    number: "Program 04",
    title: "보안·개인정보 보호",
    body: "• 사이버보안 기초\n• 개인정보보호법 교육\n• 임직원 보안 의식 강화 과정",
  },
];

export type Audience = { badge: string; title: string; body: string };

export const audiences: Audience[] = [
  {
    badge: "임원·관리자",
    title: "DX 전략 리더십 과정",
    body: "AI·DX 비즈니스 이해, 디지털 전환 전략 수립, 데이터 기반 의사결정 역량 강화",
  },
  {
    badge: "실무 담당자",
    title: "AI 도구 실무 활용 과정",
    body: "생성형 AI 업무 적용, 데이터 분석 실무, 클라우드 협업 툴 활용 능력 향상",
  },
  {
    badge: "IT·개발팀",
    title: "기술 심화 전문 과정",
    body: "클라우드 인프라, 보안, AI 개발, 데이터 엔지니어링 등 직무별 심화 기술 교육",
  },
];

export type ProcessStep = { step: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 01",
    title: "교육 니즈 상담",
    body: "기업 현황, 교육 목적 등\n초기 상담을 통해 파악.",
  },
  {
    step: "STEP 02",
    title: "커리큘럼 설계",
    body: "직무·수준·일정을 반영한\n커리큘럼 설계를 하고\n교육안을 구성.",
  },
  {
    step: "STEP 03",
    title: "교육 운영",
    body: "집합·원격·하이브리드 등 원하는 방식으로 교육을 진행.",
  },
  {
    step: "STEP 04",
    title: "성과 측정·리포트",
    body: "교육 전·후 역량 측정과\n만족도조사 기반 리포트를 제공하여 교육 효과를 확인.",
  },
];

export const fieldTags: string[] = [
  "생성형 AI 활용",
  "ChatGPT / Copilot 업무 활용",
  "MS-Office 365",
  "클라우드 기초·실무",
  "데이터 분석 (엑셀·파이썬)",
  "사이버보안·개인정보보호",
  "DX 전략 수립",
  "BI 구현 (Power BI 등)",
  "비개발자 AI 툴 입문",
  "업무 툴 (Notion·Slack)",
  "IT 리터러시 기초",
];

export const educationTypes = [
  "AI·DX 역량강화",
  "클라우드·IT 인프라",
  "데이터 분석·활용",
  "보안·개인정보 보호",
  "기타(직접 상담)",
] as const;

export const groupSizes = [
  "10명 미만",
  "10~30명",
  "30~50명",
  "50~100명",
  "100명 이상",
] as const;
