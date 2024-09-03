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

## ⚠️ 오류

> 개발을 완료한 이후 테스트 진행 중 발생한 오류입니다.
> 아래 3가지 아이콘을 통해 현재 어떤 상황인지 작성합니다.
>
> - ✅: 해결 완료, 적용
> - 💥: 적용해봤지만 원하는대로 작동하지 않음
> - 👀: 현재 시도해 보는 중

### `DetailModal`에서 이름 변경 시 이미 저장된 이름으로 저장할 수 있음

> 검사받던 중 강사님께서 발견하신 오류로 **`Editor` 컴포넌트**에 `isNew`를 추가하면서 저장 버튼 클릭 시 이름 검사를 해당 항목이 `true`인 경우에만 진행하도록 해서 발생한 오류입니다.

- 방법 1. ✅ 수정 페이지인 경우 name input에 disabled 속성 추가
- 방법 2. 수정 페이지인 경우 name input 숨김
- 방법 3. 👀 이미 있는 이름이라면 저장할 수 없도록 수정

### filter가 적용된 상태로 새로운 데이터 추가 시 데이터가 보이지 않음

> RBF 이후에 제대로 작동하는지 테스트하던 중 발견된 오류입니다.

- 방법 1. 💥 filter를 App에서 적용
  - Enter로 검색하기 위해 2개의 state(search, filter)가 필요한데 두 개 모두 App에 작성하면 너무 복잡해보임
- 방법 2. 👀 filter가 적용되고있는 상태일 때 스타일 추가
- 방법 3. 전역 상태 관리
