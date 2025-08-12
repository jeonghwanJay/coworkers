## <img width="18" alt="Union@2x" src="https://github.com/user-attachments/assets/51f0d07a-b1cc-4ba7-91d2-73e0eae8e035" /> Coworkers

## 📌 프로젝트 개요
> Coworkers는 팀 생성부터 참여까지, 협업을 위한 모든 과정을 간편하게 관리할 수 있는 플랫폼입니다.  
> Next.js(App Router) 기반으로 개발되었으며, 개별 사용자는 팀을 생성하거나 초대 링크를 통해 참여할 수 있고 프로필 이미지, 팀 정보 수정, 히스토리 관리 등의 기능을 제공합니다.

---

## 🛠️ 기술 스택

## 🎨 프론트엔드 

<div align=center> 
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">
</div>

<br/>

## 🔄 API 및 상태 관리

<div align=center>
  <img src="https://img.shields.io/badge/Fetch--API-333333?style=for-the-badge&logo=javascript&logoColor=white"> 
  <img src="https://img.shields.io/badge/Zustand-F3DF49?style=for-the-badge&logo=Zustand&logoColor=white">
  <img src="https://img.shields.io/badge/TanStack--Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
  <img src="https://img.shields.io/badge/Zod-3E5BA5?style=for-the-badge&logo=Zod&logoColor=white">
</div>

<br/>

## 👥 협업

<div align=center> 
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  <img src="https://img.shields.io/badge/GitHubActions-2088FF?style=for-the-badge&logo=GitHubActions&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
</div>

<br/>

## 📦 패키지 매니저

<div align=center>
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">
</div>

<br/>

## ☁️ 배포

<div align=center>
  <img src="https://img.shields.io/badge/AWS--EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
</div>

<br/>
<br/>

---

## 💡 주요 기능
- 회원가입 / 로그인
- 팀 생성 / 참여 / 수정 / 선택
- 마이 히스토리 페이지 (작업 이력 관리)
- 팀 페이지 (팀 전용 대시보드)
- 할 일 목록 페이지
- 모집 게시판 페이지
- 게시글 쓰기 및 상세 페이지
- 계정 설정 페이지
- AWS EC2 기반 배포

---

## 🙋‍♂️ 나의 기여
| 구분 | 상세 내용 |
|------|----------|
| **개발 환경** | Husky 초기 설정 |
| **공통 컴포넌트** | 버튼 공통 컴포넌트 구현 ([Wiki](https://github.com/FE14-Part4-Team2/coworkers/wiki/%EB%B2%84%ED%8A%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)) | 
| **페이지 개발** | 팀 생성 / 참여 / 선택 / 수정 페이지 UI 및 기능 구현 |
| **페이지 개발** | 마이 히스토리 페이지 UI 및 기능 구현 |
| **배포** | AWS EC2 환경 구성 및 프로젝트 배포 |
| **문서화** | 프로젝트 README 작성 |

---

## 📷 작업 화면
### 1. 팀 선택 페이지

- 회원가입 직후 처음 진입하는 페이지로, 사용자가 아직 소속된 팀이 없을 경우 표시됩니다.
- 팀에 속하지 않은 사용자에게 팀 생성 또는 팀 참여를 유도하는 역할을 합니다.
- 하단 버튼을 통해 사용자는 두 가지 중 하나를 선택할 수 있습니다.
  - 팀 생성하기: 새 팀을 만들고 관리자로 시작
  - 팀 참여하기: 초대 링크를 통해 기존 팀에 참여
- 이후 사용자가 팀에 속하게 되면 해당 페이지는 더 이상 나타나지 않으며, 접근 시 랜딩 페이지로 리다이렉션됩니다.

![스크린샷 2025-06-23 03 17 44](https://github.com/user-attachments/assets/e8e2244a-9677-47ad-9e2f-6a00e5a6d826)


### 2. 팀 생성 페이지

- 사용자가 협업을 시작할 팀을 새롭게 생성할 수 있는 페이지입니다.
- 팀 이름과 팀 프로필 이미지를 추가하여 팀 정보를 설정할 수 있습니다.
- 팀 이름은 자유롭게 작성 가능하며 유효성 검사가 적용됩니다.
- 팀 프로필 이미지는 사용자가 업로드할 수 있으며, 추가하지 않을 경우 기본 이미지가 적용됩니다.
- 팀 생성 완료 시 자동으로 해당 팀의 팀 페이지로 이동됩니다.

![스크린샷 2025-06-23 02 11 22](https://github.com/user-attachments/assets/4239ced6-ec36-495d-910b-00569c4325e4)

### 3. 팀 참여 페이지

- 이미 생성된 팀에 초대 링크를 통해 참여 할 수 있는 페이지입니다.
- 사용자는 공유받은 팀 링크를 입력하여 팀에 합류할 수 있습니다.
- 팀에 참여하면 자동으로 해당 팀의 팀 페이지로 이동됩니다.
- 유효하지 않은 링크를 입력할 경우 에러 메시지를 통해 사용자에게 안내됩니다.

![스크린샷 2025-06-23 03 25 47](https://github.com/user-attachments/assets/bcfdbcc1-1321-470e-adbd-3e27dceecf2f)

### 4. 팀 수정 페이지

- 팀 생성 이후, 팀 정보를 수정할 수 있는 페이지입니다.
- 사용자는 팀 이름과 팀 프로필 이미지를 변경할 수 있습니다.
- 프로필 이미지는 사용자가 직접 새로 업로드할 수 있으며, 미선택 시 기존 이미지가 유지됩니다.
- 팀 이름은 자유롭게 작성 가능하며 유효성 검사가 적용됩니다.
- 수정 완료 시 변경된 팀 정보는 팀 페이지 및 관련 모든 페이지에 실시간 반영됩니다.
- 이 페이지는 팀 관리자만 접근 가능하며, 팀 멤버는 팀 정보를 수정할 수 없습니다.

![스크린샷 2025-06-23 03 03 05](https://github.com/user-attachments/assets/1317192f-f555-4631-8caf-c8694a02a5d3)

### 5. 마이 히스토리 페이지

- 사용자가 완료한 할 일을 날짜별로 모아볼 수 있는 기록 페이지입니다.
- 완료된 작업은 자동으로 히스토리에 저장되며, 최신 날짜 기준으로 그룹화되어 정렬됩니다.
- 각 작업은 제목, 날짜 정보를 포함하며 시각적으로 구분됩니다.
- 히스토리 항목은 읽기 전용이며, 수정/삭제는 불가능합니다.

![스크린샷 2025-06-23 04 23 06](https://github.com/user-attachments/assets/c5c9aa9f-175e-43f1-92cc-78a9f40e16b3)
---

## ⚙️ 실행 방법
```bash
$ pnpm install
$ pnpm run dev
```

---

## 📌 GitHub Repository
- [원본 레포지토리](https://github.com/FE14-Part4-Team2/coworkers)
- [Forked 레포지토리](https://github.com/jeonghwanJay/coworkers)
