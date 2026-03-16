# 포트폴리오 - Notion API 활용

Notion API를 연동해 프로젝트 데이터를 관리하는 개인 포트폴리오입니다.  
퍼블리셔 경험을 바탕으로 React + TypeScript 환경에서 컴포넌트 구조화, 데이터 흐름, 상태 처리, 유지보수성을 고민하며 작업했습니다.

## 배포 링크

https://portfolio-notion-vert.vercel.app/

## 프로젝트 소개

이 프로젝트는 Notion API를 활용해 Notion을 CMS처럼 사용하고,  
콘텐츠 관리와 화면 구현을 분리하는 방식으로 만든 포트폴리오입니다.

프로젝트 목록과 상세 콘텐츠를 Notion 데이터베이스 기반으로 관리하고,  
프론트엔드에서는 이를 조회해 사용자에게 보여주는 구조로 구성했습니다.

단순히 화면 구현에만 그치지 않고, 아래와 같은 부분을 함께 고려했습니다.

- Notion 기반 콘텐츠 관리
- 프로젝트 목록 / 상세 페이지 분리
- 로딩 / 에러 / 빈 상태 분기 처리
- 유지보수를 고려한 컴포넌트 구조화
- 배포 환경(Vercel) 기준 API 연동
- Markdown 라이브러리를 활용한 상세 본문 렌더링

## 작업 목표

- 퍼블리셔 경험 위에 React 기반 프론트엔드 작업 방식을 확장해보기
- 정적 하드코딩이 아닌 데이터 기반 포트폴리오 구조 만들기
- 실제 배포 환경에서 API, 환경변수, 빌드 이슈까지 직접 점검해보기
- 사용자 입장에서 자연스러운 탐색 흐름과 읽기 경험 만들기

## 기술 스택

### Frontend

- React
- TypeScript
- Vite

### Styling / UI

- Vanilla-extract

### Data / State

- TanStack Query
- Notion API

### Deploy

- Vercel
- Serverless Function (`/api`)

## 주요 기능

- Notion 데이터베이스 기반 프로젝트 목록 조회
- slug 기반 프로젝트 상세 페이지 조회
- 로딩 / 에러 / 빈 상태 UI 분기
- 이전글 / 다음글 탐색
- 배포 환경 기준 환경변수 분리
- 서버리스 API를 통한 Notion 데이터 가공 및 전달

## 디렉토리 구조

```bash
.
├─ api/            # Vercel Serverless Functions
├─ public/         # 정적 파일
├─ src/            # 프론트엔드 소스
├─ .env.example
├─ vite.config.ts
└─ package.json
```

## Note

Notion API를 연동해 프로젝트 데이터를 관리하는 개인 포트폴리오입니다.  
퍼블리셔 경험을 바탕으로 React + TypeScript 환경에서 컴포넌트 구조화, 데이터 흐름, 상태 처리, 유지보수성을 고민하며 작업했습니다.
