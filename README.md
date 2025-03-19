# LOLLOL

## 💻 프로젝트 소개

🔗 [LoLLoL 배포 사이트](https://lollol-puce.vercel.app/)

&nbsp; **[Frontend / Next.js & TS / 개인 과제]** <br /> &nbsp; 📆 작업 기간 : 2025.03.11 ~ 2025.03.18 <br />

- Riot Games의 API와 Data Dragon을 활용하여 LoL의 다양한 데이터를 조회하고, 이를 기반으로 만든 웹 애플리케이션입니다.

<br />

![Next.js](https://img.shields.io/badge/-Next.js-000000?&logo=Next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?&logo=typescript&logoColor=white) ![TanstackQuery](https://img.shields.io/badge/-TanstackQuery-FF4154?&logo=reactquery&logoColor=white) ![Tailwindcss](https://img.shields.io/badge/-Tailwindcss-06B6D4?&logo=tailwindcss&logoColor=white) ![RiotGamesAPI](https://img.shields.io/badge/-RiotGamesAPI-EB0029?&logo=riotgames&logoColor=white) ![vercel](https://img.shields.io/badge/-vercel-000000?&logo=vercel&logoColor=white)

<br />

## 🔹 페이지 구성

| **1. 메인 화면** |
| :--------------: |
| <img src="https://github.com/user-attachments/assets/6cc83b09-e87d-4f83-a94f-65d8f10ae967" /> |
|**2. 챔피언 전체 목록 페이지** |
| <img src="https://github.com/user-attachments/assets/f86113d6-ec39-4dd8-8b07-ef2ba4f24e04" /> |
| **3. 챔피언 로테이션 페이지** |
| <img src="https://github.com/user-attachments/assets/40660ca8-3533-4d0d-b966-27f572586e63" /> |
| **4. 챔피언 상세 페이지** |
| <img src="https://github.com/user-attachments/assets/59b3155f-8045-436d-947d-b072c910db2e" />|
| **5. 아이템 목록 페이지** |
| <img src="https://github.com/user-attachments/assets/955da47e-4bbc-475c-9981-cf781af72f7b" />|

<br />

## 🔹 기능 소개

- Next.js 프레임워크로 구성된 프로젝트입니다.
- 각 페이지 별로 다양한 렌더링(SSG, SSR, ISR, CSR) 방식을 적용하여 구현하였습니다.
- TanstackQuery를 사용하여 비동기 통신 및 캐싱기능으로 서버데이터를 효율적으로 관리합니다.
- Tailwindcss를 활용하여 반응형 디자인을 적용하였습니다.
- next-themes 라이브러리를 사용하여 컬러모드 테마를 구현하였습니다.

<br />

## 🔹 트러블 슈팅 & 작업 후기

- ### [[트러블 슈팅]브라우저가 정신을 못차려요](https://velog.io/@ly-ra/이건-브라우저가-잘못한건가)
- ### [[트러블 슈팅]하이드레이션 불일치요?](https://velog.io/@ly-ra/하이드레이션-불일치요)

<br />

## 📁 프로젝트 구조
```markdown
LoLLoL
├─ public
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ rotation/route.ts  # Riot API 데이터를 가져오는 Route
│  │  ├─ champions/            # 챔피언 관련 페이지
│  │  │  └─ [id]/page.tsx      # 개별 챔피언 상세 페이지
│  │  ├─ items/                # 아이템 관련 페이지
│  │  ├─ rotation/             # 로테이션 챔피언 페이지
│  │  ├─ global-error.tsx      # 전체 애플리케이션 에러 핸들링
│  │  ├─ layout.tsx            # 전체 페이지 레이아웃
│  │  ├─ loading.tsx           # 로딩 UI
│  │  ├─ not-found.tsx         # 404 페이지 UI
│  │  ├─ page.tsx              # 메인 페이지
│  │  ├─ TQProviders.tsx       # 앱 전역 컨텍스트
│  ├─ components/              # UI 컴포넌트 모음
│  ├─ constants.ts             # 상수 값 정의 
│  ├─ services/                # API 로직 관련 파일
│  ├─ styles/                  # 스타일 관련 파일
│  ├─ types/                   # 타입 정의 파일
│  └─ utils/                   # 유틸리티 함수
└─
```
