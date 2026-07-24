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
    q: "Q. 지원은 어떻게 하나요?",
    a: "채용 공고 페이지에서 이력서와 포트폴리오를 자유 형식으로 첨부해 온라인 지원 가능합니다. 경력 사항과 프로젝트 경험을 구체적으로 작성하면 검토에 유리합니다.",
  },
  {
    q: "Q. 전형 절차는 어떻게 진행되나요?",
    a: "서류 전형 → 실무 면접 → 임원 면접 순으로 진행되며, 직군에 따라 과제 전형이나 포트폴리오 리뷰가 추가될 수 있습니다.",
  },
  {
    q: "Q. 신입도 지원할 수 있나요?",
    a: "네, 가능합니다. 공고별로 요구 경력 수준이 다르니 상세 요건을 확인해 주세요. 실무 경험이 없더라도 관련 프로젝트나 학습 경험을 어필해 주시면 좋습니다.",
  },
  {
    q: "Q. 상시 채용인가요, 마감 기한이 있나요?",
    a: "대부분의 포지션은 상시 채용으로 운영되며, 채용이 마감되면 공고에서 자동으로 안내됩니다.",
  },
];
