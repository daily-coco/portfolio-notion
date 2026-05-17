// src/content/profile.ts
export type ProfileType = {
  label: string;
  title: string;
  value: string;
};

export const profileKeywords: ProfileType[] = [
  {
    label: 'Publishing',
    title: '운영/구축/개선 경험',
    value:
      '운영, 구축, 개선 프로젝트를 통해 안정적인 웹 서비스를 만들어왔습니다.',
  },
  {
    label: 'Frontend',
    title: 'React 기반 UI 구현/TypeScript 기반 개발 학습 중',
    value:
      '컴포넌트 기반 개발과 타입 시스템을 바탕으로 더 단단한 프론트엔드 개발을 지향합니다.',
  },
  {
    label: 'WORK STYLE',
    title: '구조적 사고/개선 지향/사용자 관점',
    value:
      '복잡한 문제를 구조적으로 풀고, 사용자에게 더 나은 경험을 제공합니다.',
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
