export type CoreTech = { number: string; title: string; body: string };

export const coreTech: CoreTech[] = [
  {
    number: "01",
    title: "적응형 AI 평가 엔진",
    body: "응시자의 수준에 맞춰 실시간으로 난이도를 조절하는 AI 기반 적응형 평가 시스템을 제공합니다.",
  },
  {
    number: "02",
    title: "멀티모달 역량 분석",
    body: "코딩, 문제해결, 의사결정 등 다차원적 역량을 종합적으로 분석하고 평가합니다.",
  },
];

export type Domain = { title: string; body: string };

export const domains: Domain[] = [
  {
    title: "AI 리터러시",
    body: "AI/ML 기본 개념, 생성형 AI 작동 원리, 기술 트렌드 이해 역량을 평가합니다.",
  },
  {
    title: "프롬프트 설계",
    body: "목적에 맞는 프롬프트 구조화와 최적 결과 도출 실무 능력입니다.",
  },
  {
    title: "업무 적용",
    body: "직무에 AI 도구를 접목해 생산성을 높이는 응용 역량을 측정합니다.",
  },
  {
    title: "데이터 분석",
    body: "AI로 데이터를 해석하고 비즈니스 인사이트로 전환하는 능력입니다.",
  },
  {
    title: "보안 윤리",
    body: "정보 보안, 저작권, 개인정보 보호 및 AI 편향 인식 역량입니다.",
  },
  {
    title: "자동화 워크플로우",
    body: "AI 기반 업무 자동화, 워크플로우 구성, 도구 통합 운용 역량을 평가합니다.",
  },
];

export type DomainScore = { label: string; score: number };

export const reportSample = {
  name: "홍길동",
  role: "Senior Engineer",
  totalScore: 75.5,
  level: "Advanced",
  levelRange: "75–89점 구간",
};

export const domainScores: DomainScore[] = [
  { label: "AI 리터러시", score: 82 },
  { label: "프롬프트 설계", score: 75 },
  { label: "업무 적용", score: 68 },
  { label: "데이터 분석", score: 90 },
  { label: "보안 윤리", score: 60 },
  { label: "자동화 워크플로우", score: 78 },
];

export type DashboardFeature = { title: string; body: string };

export const dashboardFeatures: DashboardFeature[] = [
  {
    title: "실시간 분석",
    body: "평가 진행 상황과 결과를 실시간으로 모니터링합니다.",
  },
  {
    title: "역량 매핑",
    body: "개인별 AI 역량 수준을 시각적으로 매핑합니다.",
  },
  {
    title: "맞춤 리포트",
    body: "조직 니즈에 맞는 커스텀 리포트를 생성합니다.",
  },
];

export type TechComponent = { code: string; title: string; body: string };

export const techComponents: TechComponent[] = [
  {
    code: "T-01",
    title: "동적 문항 생성 AI",
    body: "직군·직급별 맞춤형 문항 자동 생성",
  },
  {
    code: "T-02",
    title: "자동 채점 엔진",
    body: "주관식·실습형 답변 AI 자동 평가 및 피드백",
  },
  {
    code: "T-03",
    title: "적응형 난이도 (CAT)",
    body: "응시자 수준에 따른 난이도 실시간 조정",
  },
  {
    code: "T-04",
    title: "실습형 평가 샌드박스",
    body: "실제 AI 도구 환경에서 과제 수행 능력 측정",
  },
  {
    code: "T-05",
    title: "부정행위 탐지",
    body: "시선 추적, 화면 공유·응시 패턴 이상 감지",
  },
  {
    code: "T-06",
    title: "개인 역량 대시보드",
    body: "레이더 차트·트렌드·도메인별 점수 셀프 리포트",
  },
  {
    code: "T-07",
    title: "HR 조직 분석 대시보드",
    body: "부서·팀·레벨별 역량 분포, 취약 영역, ROI 파악",
  },
  {
    code: "T-08",
    title: "학습경로 추천",
    body: "평가 결과 기반 개인별 최적 학습 설계",
  },
];

export type SecurityFeature = { title: string; body: string };

export const securityFeatures: SecurityFeature[] = [
  {
    title: "본인 인증",
    body: "AI 기반 실시간 본인 인증으로 대리 응시를 원천 차단합니다.",
  },
  {
    title: "환경 모니터링",
    body: "응시 환경을 실시간으로 모니터링하여 공정한 평가를 보장합니다.",
  },
  {
    title: "이상 행동 탐지",
    body: "AI가 비정상적인 응시 패턴을 자동으로 감지하고 알림합니다.",
  },
  {
    title: "데이터 암호화",
    body: "모든 평가 데이터는 엔드투엔드 암호화로 안전하게 보호됩니다.",
  },
];
