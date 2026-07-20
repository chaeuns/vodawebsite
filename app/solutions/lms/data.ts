export type ValueProp = { number: string; title: string; body: string };

export const valueProps: ValueProp[] = [
  {
    number: "01",
    title: "올인원 통합 관리",
    body: "교육생 모집부터 선발, 출결, 수료까지 훈련 운영에 필요한 모든 과정을 하나의 플랫폼에서 관리합니다.",
  },
  {
    number: "02",
    title: "AI 교육 특화 설계",
    body: "VODA의 AI 교육 운영 노하우를 바탕으로 설계되어, 국비지원 훈련 정책 변화에도 빠르게 대응합니다.",
  },
  {
    number: "03",
    title: "메타버스 교육 환경",
    body: "가상 강의실에서 실시간 상호작용이 가능한 몰입형 원격 교육 환경을 제공합니다.",
  },
];

export type Feature = { titleEn: string; titleKo: string; points: string[] };

export const features: Feature[] = [
  {
    titleEn: "Smart Curriculum Management",
    titleKo: "스마트 교육과정 관리",
    points: [
      "차수별 커리큘럼 등록·수정",
      "학습 콘텐츠 및 강의 자료 연동",
      "진도율 실시간 자동 추적",
      "훈련 일정·시간표 자동 관리",
    ],
  },
  {
    titleEn: "AI Interview System",
    titleKo: "AI 기반 면접 시스템",
    points: [
      "AI 역량 진단 결과 연동",
      "지원자 자동 스크리닝",
      "면접 일정 자동 배정",
      "면접 결과 리포트 자동 생성",
    ],
  },
  {
    titleEn: "Intelligent Student Selection",
    titleKo: "지능형 교육생 선발",
    points: [
      "지원자 데이터 통합 관리",
      "선발 기준 맞춤 설정",
      "합격자 자동 안내 발송",
      "대기자 명단 자동 관리",
    ],
  },
  {
    titleEn: "Smart Attendance Management",
    titleKo: "스마트 출결 관리",
    points: [
      "QR·안면인식 기반 출결 체크",
      "실시간 출결 현황 모니터링",
      "훈련장려금 연동 리포트 생성",
      "결석·지각 자동 알림 발송",
    ],
  },
  {
    titleEn: "Metaverse Live Campus",
    titleKo: "메타버스 라이브 캠퍼스",
    points: [
      "가상 강의실 실시간 운영",
      "화상 기반 실시간 상호작용",
      "그룹별 스터디룸 제공",
      "출석 데이터 자동 연동",
    ],
  },
];

export type AdminFeature = { title: string; body: string };

export const adminFeatures: AdminFeature[] = [
  {
    title: "과정 관리",
    body: "차수 개설부터 커리큘럼 편성까지, 교육 과정 전반을 한 화면에서 관리합니다.",
  },
  {
    title: "출결·성적 관리",
    body: "실시간 출결 현황과 평가 데이터를 자동으로 집계하고 리포트로 제공합니다.",
  },
  {
    title: "대시보드 리포트",
    body: "운영 현황을 한눈에 파악할 수 있는 통계와 리포트로 의사결정을 지원합니다.",
  },
];
