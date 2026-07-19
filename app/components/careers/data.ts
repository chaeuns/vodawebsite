export type TeamTab = "기술지원 팀" | "콘텐츠개발 팀" | "전략교육 팀" | "융합기술연구소";

export type Job = {
  title: string;
  open: boolean;
  url?: string;
};

export const teams: TeamTab[] = [
  "기술지원 팀",
  "콘텐츠개발 팀",
  "전략교육 팀",
  "융합기술연구소",
];

export type ExpertRole = "강사" | "프로젝트 강사" | "멘토";

export const expertRoles: ExpertRole[] = ["강사", "프로젝트 강사", "멘토"];

export const expertRoleDescriptions: Record<ExpertRole, string> = {
  강사: "IT 분야 전문 지식을 바탕으로 학습자에게 실무 중심 교육을 제공합니다.",
  "프로젝트 강사": "실무 프로젝트를 설계하고 직접 이끌며 학습자의 현장 역량을 키웁니다.",
  멘토: "학습자의 성장을 돕고 진로 및 실무 방향에 대한 조언을 제공합니다.",
};

export const jobsByTeam: Record<TeamTab, Job[]> = {
  "기술지원 팀": [
    { title: "클라우드 엔지니어", open: false },
    { title: "프론트엔드 개발자", open: false },
    { title: "백엔드 개발자", open: false },
    { title: "TA (Teaching Assistant)", open: false },
    { title: "디자이너", open: false },
  ],
  "콘텐츠개발 팀": [
    { title: "콘텐츠 기획자", open: false },
    { title: "영상 제작자", open: false },
    { title: "교육 컨텐츠 개발자", open: false },
  ],
  "전략교육 팀": [
    {
      title: "교육 운영 팀장",
      open: true,
      url: "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=54104909&view_type=search",
    },
    { title: "교육 운영진", open: true },
  ],
  "융합기술연구소": [
    { title: "AI 연구원", open: false },
    { title: "데이터 엔지니어", open: false },
  ],
};

export const faqs = [
  {
    q: "Q. 전문가 그룹에 참가하기 위해서는 어떻게 해야 하나요?",
    a: "아래의 신청폼을 상세히 작성해 주신 후 제출해주시면 됩니다. 빠른 시일 내에 담당자가 연락드리겠습니다.",
  },
  {
    q: "Q. 강사 자격에 대한 구체적인 기준을 알고 싶습니다.",
    a: "프론트엔드, 백엔드, AI/머신러닝, 클라우드·인프라 분야 중 하나 이상에서 실무 경력 및 프로젝트 경험을 보유하신 분을 우대합니다.\n관련 직무 경험이 있으시거나, 해당 분야의 포트폴리오 또는 강의·멘토링 이력이 있으신 분이라면 더욱 환영합니다.",
  },
  {
    q: "Q. 프로젝트 강사는 일반 강사와 어떻게 다른가요?",
    a: "일반 강사가 이론 및 기술 개념 중심의 강의를 담당한다면, 프로젝트 강사는 실무 수준의 팀 프로젝트를 설계하고 직접 이끄는 역할을 합니다. 기획부터 배포까지 전 과정을\n학습자와 함께하며, 현장 감각과 문제 해결 능력을 키울 수 있도록 지도합니다. 프론트엔드·백엔드·AI·클라우드 등 특정 분야의 실무 프로젝트 경험이 풍부하신 분이 적합합니다.",
  },
  {
    q: "Q. 멘토는 어떠한 일을 하는 건가요?",
    a: "멘토는 학생들에게 지식을 전달하고, 실무형 프로젝트 경험을 쌓을 수 있도록 돕습니다. 학생들의 진로 및 직업에 대한 조언을 해주는 역할을 하며, 학생들의 성장과 성공을 위해\n함께 최선을 다해주실 분을 기다립니다.",
  },
];
