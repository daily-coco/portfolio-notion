// src/content/profile.ts
export type ProfileType = {
  label: string;
  title: string;
  value: string;
};

export const profileKeywords: ProfileType[] = [
  {
    label: 'UI STRUCTURE',
    title: '편안한 운영을 위한 고민을 통한 UI 설계',
    value:
      '시맨틱 코드를 기반으로 디자인 의도 분석과 개발 연동을 고려한 화면을 만듭니다. 반복되는 UI는 공통화하고  수정과 확장이 쉬운 구조로 정리합니다.',
  },
  {
    label: 'LEARNING FLOW',
    title: '기록하며 확장하는 학습 방식',
    value:
      '새로운 기술은 실제 화면에 적용해보며 익힙니다. 막힌 부분은 원인과 시도 과정을 기록하고, 프로젝트와 글로 다시 정리하며 다음 작업의 기준으로 만듭니다.',
  },
  {
    label: 'WORK STYLE',
    title: '함께 일하기 쉬운 기준 만들기',
    value:
      '요청의 배경과 영향 범위를 확인하고, 작업 기준과 변경 이력을 남깁니다. 혼자 빠르게 끝내는 것보다 팀이 이해하고 이어갈 수 있는 화면을 중요하게 생각합니다.',
  },
];

export type HeroGraphDepth = '1' | '2' | '3' | '4';
export type HeroGraphGroup = 'Frontend' | 'Publishing';
export type HeroGraphType = {
  group: HeroGraphGroup;
  depth: HeroGraphDepth;
  title: string;
  desc: string;
  extend?: boolean;
};

export const heroGraphData: HeroGraphType[] = [
  {
    group: 'Publishing',
    depth: '1',
    title: '운영',
    desc: '운영 및 유지보수',
  },
  {
    group: 'Publishing',
    depth: '1',
    title: '구축',
    desc: '신규 구축 및 배포',
  },
  {
    group: 'Publishing',
    depth: '1',
    title: '개선',
    desc: '성능 및 사용성 개선',
  },
  {
    group: 'Frontend',
    depth: '2',
    extend: true,
    title: '컴포넌트',
    desc: 'React류 컴포넌트 설계',
  },
  {
    group: 'Frontend',
    depth: '3',
    title: '상태 관리',
    desc: '상태 관리 적용 ',
  },
  {
    group: 'Frontend',
    depth: '4',
    title: '재사용 가능한 UI',
    desc: '확장 가능한 구조 설계',
  },
];
export const techMarqueeLogos = [
  { id: 'logo_html5', label: 'html5' },
  { id: 'logo_css3', label: 'css3' },
  { id: 'logo_javascript', label: 'javascript' },
  { id: 'logo_typescript', label: 'typescript' },
  { id: 'logo_sass', label: 'sass' },
  { id: 'logo_gulp', label: 'gulp' },
  { id: 'logo_react', label: 'react' },
  { id: 'logo_vanilla_extract', label: 'vanilla-extract' },
  { id: 'logo_sourcetree', label: 'sourcetree' },
  { id: 'logo_github', label: 'github' },
  { id: 'logo_vercel', label: 'vercel' },
  { id: 'logo_photoshop', label: 'photoshop' },
  { id: 'logo_zeplin', label: 'zeplin' },
  { id: 'logo_figma', label: 'figma' },
  { id: 'logo_notion', label: 'notion' },
  { id: 'logo_dooray', label: 'dooray' },
];
