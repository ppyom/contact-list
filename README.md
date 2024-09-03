<div align="center">

# Contact List 📖

연락처 리스트를 관리하는 웹 애플리케이션입니다.

[![Demo](https://img.shields.io/badge/Demo-ffffff?style=flat-square&color=21201f)](https://ppyom.github.io/contact-list/)

![React](https://img.shields.io/badge/React-ffffff?style=flat-square&logo=react&logoColor=ffffff&labelColor=61dafb&color=61dafb)

</div>

> **프로그래머스 데브코스: 클라우드 기반 프론트엔드 엔지니어링** 수업시간에 진행한 과제입니다.

## 💡 주요 기능

### 저장

- 연락처를 저장할 수 있습니다.
- 이름은 한글 2글자 이상 입력 가능합니다.
- 전화번호는 하이픈(-)을 포함한 문자열 형태로 입력합니다. (ex. 010-0000-0000)
- 그룹은 목록에서 선택하거나 **그룹 추가** 버튼을 클릭해 그룹을 추가할 수 있습니다.
  - 그룹을 삭제하기 위해서는 해당 그룹을 사용하는 사람이 한 명도 존재하지 않아야 합니다.

### 조회/검색

- 저장된 연락처 목록을 조회 및 검색할 수 있습니다.
- **전체 리스트** 버튼을 클릭하면 검색어 필터가 초기화됩니다.

### 상세 조회/수정

- 상세 조회를 원하는 연락처의 **세부사항** 버튼을 클릭하면 연락처 상세 정보를 확인할 수 있습니다.
- 상세 정보 화면에서 **수정** 버튼을 클릭하면 해당 연락처를 수정할 수 있습니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 패키지를 설치합니다.
2. `npm run dev`를 입력해 실행합니다.
   - 기본 포트는 **3000**으로 되어있습니다.

## 🗂️ 프로젝트 구조

```
📁 src/
    📁 assets/styles/		# 공통 CSS 파일
    📁 components/		# 재사용 가능한 UI 컴포넌트
        📁 modals/		# Modal 컴포넌트
    📁 storages/		# Storage
    📜 App.jsx
    📜 main.jsx
📜 index.html
```

### 컴포넌트 저장 방법

- `[Component 이름].jsx` 파일과 `[Component 이름].module.css`(optional) 파일을 `[Component 이름]` 디렉토리에 저장
- 컴포넌트 내부에서 공용으로 사용하는 컴포넌트의 경우 부모 컴포넌트 디렉토리 내부에 작성 방법에 맞게 저장
- 컴포넌트를 사용한 다른 버전의 컴포넌트 경우 컴포넌트 디렉토리 내부에 그대로 저장

#### 예시

```
📁 Editor/
    📁 InputItem/
        📜 InputEl.jsx
        📜 InputItem.jsx
        📜 InputItem.module.css
        📜 SelectEl.jsx
    📜 Editor.jsx
    📜 Editor.module.css
```
