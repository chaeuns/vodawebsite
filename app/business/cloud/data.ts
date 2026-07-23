export type DesignPrinciple = {
  number: string;
  title: string;
  body: string;
  tag: string;
  accent: string;
  accentBg: string;
};

export const designPrinciples: DesignPrinciple[] = [
  {
    number: "01",
    title: "보안 최우선 설계",
    body: "모든 인프라 설계의 출발점은 보안입니다. 금융권 수준의\n보안 아키텍처를 기본으로 적용합니다.",
    tag: "Security",
    accent: "#DC2626",
    accentBg: "rgba(220,38,38,0.08)",
  },
  {
    number: "02",
    title: "24/7 무중단 운영",
    body: "365일 24시간 모니터링과 자동화된 운영 체계로\n서비스 안정성을 극대화합니다.",
    tag: "Availability",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.08)",
  },
  {
    number: "03",
    title: "자동 스케일링",
    body: "트래픽 변화에 실시간으로 대응하여 최적의 리소스를\n자동으로 할당합니다.",
    tag: "Scalability",
    accent: "#1D9E75",
    accentBg: "rgba(29,158,117,0.08)",
  },
  {
    number: "04",
    title: "비용 최적화",
    body: "사용량 기반 과금과 리소스 최적화를 통해 불필요한\n인프라 비용을 절감합니다.",
    tag: "Cost",
    accent: "#D97706",
    accentBg: "rgba(217,119,6,0.08)",
  },
  {
    number: "05",
    title: "재해 복구 설계",
    body: "예측 불가능한 장애 상황에서도 비즈니스 연속성을 보장하는\n복구 체계를 설계합니다.",
    tag: "Resilience",
    accent: "#DC2626",
    accentBg: "rgba(220,38,38,0.08)",
  },
];

export type ServiceProcessStep = { step: string; title: string; body: string };

export const serviceProcessSteps: ServiceProcessStep[] = [
  {
    step: "STEP 1",
    title: "현황 진단",
    body: "기존 인프라\n현황 분석",
  },
  {
    step: "STEP 2",
    title: "아키텍처\n설계",
    body: "비즈니스에\n적합한 클라우드 아키텍처 설계",
  },
  {
    step: "STEP 3",
    title: "마이그레이션",
    body: "데이터·서비스\n무중단 전환 진행",
  },
  {
    step: "STEP 4",
    title: "보안 검증",
    body: "보안 취약점 점검\n접근 정책 수립",
  },
  {
    step: "STEP 5",
    title: "운영 안정화",
    body: "24/7 모니터링 체계 구축과\n지속 지원",
  },
];

export type QuickLink = {
  badge: string;
  title: string;
  body: string;
  href: string;
};

export const quickLinks: QuickLink[] = [
  {
    badge: "Infrastructure",
    title: "인프라 진단",
    body: "현재 인프라 상태를 점검하고\n클라우드 전환 로드맵을 제안해드립니다",
    href: "/contact",
  },
  {
    badge: "Migration",
    title: "마이그레이션 상담",
    body: "온프레미스에서 클라우드로의\n안전한 전환 계획을 함께 수립합니다",
    href: "/contact",
  },
  {
    badge: "Security",
    title: "보안 컨설팅",
    body: "취약점 진단부터 컴플라이언스\n대응까지 전문가가 함께합니다",
    href: "/contact",
  },
];
