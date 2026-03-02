export const CACHE = {
  CDN: {
    // 목록(자주 안 바뀜)
    PROJECTS_S_MAXAGE: 600, // 10분
    PROJECTS_SWR: 86400, // 1일

    // 본문(변할 수 있음)
    PAGE_S_MAXAGE: 600, // 10분
    PAGE_SWR: 86400, // 1일
  },
} as const;
