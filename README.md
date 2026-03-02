## 로컬 실행 방법

### 준비물

- Node.js (LTS 권장)
- Vercel CLI

### 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 설정해 주세요.  
`.env.local` 파일은 **GitHub에 커밋하면 안 됩니다.**

```bash
NOTION_TOKEN=your_notion_token
NOTION_DATABASE_ID=your_notion_database_id
```

### 로컬 실행

이 프로젝트는 /api 아래의 Vercel 서버리스 함수를 사용하므로, 아래 명령어로 실행해 주세요.

```
vercel dev
```

접속 주소
http://localhost:3000
