# Daily AI React Landing Page

기존 HTML/CSS/JavaScript 랜딩페이지를 React + Vite로 변환한 실습 프로젝트입니다.

## 1. 변환 과정 이해하기

### 1단계: React 실행 환경 만들기

`package.json`에 React와 Vite를 추가했습니다.

- `react`: 화면을 컴포넌트로 작성
- `react-dom`: React 화면을 브라우저 DOM에 연결
- `vite`: 개발 서버와 프로덕션 빌드 담당

### 2단계: HTML 진입점 줄이기

기존 `index.html`의 긴 본문을 다음처럼 React가 그릴 자리만 남겼습니다.

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

### 3단계: JSX로 화면 옮기기

`src/App.jsx`에서 기존 HTML을 JSX로 변환했습니다.

- HTML의 `class`는 JSX에서 `className`으로 변경
- 닫는 태그가 필요한 요소는 `<span />`처럼 작성
- 반복되는 카드와 메뉴는 배열 + `map()`으로 렌더링
- 현재 연도는 `{new Date().getFullYear()}`로 표시

### 4단계: JavaScript 동작을 React 상태로 변경

기존 `querySelector`와 `addEventListener` 대신 FAQ 상태를 선언했습니다.

```jsx
const [openFaq, setOpenFaq] = useState(0);
```

FAQ를 클릭하면 `setOpenFaq`가 실행되고, 상태에 맞춰 `active` 클래스와 답변 높이가 다시 렌더링됩니다.

### 5단계: CSS 재사용

기존 디자인을 유지하기 위해 `styles.css`를 그대로 사용하고 `src/main.jsx`에서 import했습니다. React로 바꾼다고 CSS를 새로 작성할 필요는 없습니다.

## 2. 로컬에서 실습하기

PowerShell에서는 `npm` 대신 `npm.cmd`를 사용하면 실행 정책 오류를 피할 수 있습니다.

```powershell
cd c:\KIMJINGYU\01_html_copliot\daily-ai-landing-page
npm.cmd install
npm.cmd run dev
```

터미널에 표시된 로컬 주소를 브라우저에서 엽니다. FAQ를 클릭해 하나씩 열리는지 확인한 뒤 `src/App.jsx`의 문구나 배열 데이터를 직접 바꿔보세요.

프로덕션 빌드는 다음 명령으로 확인합니다.

```powershell
npm.cmd run build
```

## 3. GitHub에 업로드하기

GitHub에서 빈 저장소를 하나 만든 뒤, 아래 명령을 프로젝트 폴더에서 실행합니다. 저장소 주소는 본인의 주소로 바꿉니다.

```powershell
git init
git add .
git commit -m "Convert landing page to React"
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

`node_modules`, `dist`, 환경 변수 파일은 `.gitignore`에 등록되어 업로드되지 않습니다.

## 폴더 구조

```text
index.html       React 루트만 포함한 브라우저 진입점
src/main.jsx     React 렌더링 시작점
src/App.jsx      랜딩페이지 컴포넌트와 화면 데이터
styles.css       기존 전체 스타일
script.js        변환 전 FAQ 코드 참고용, 현재는 사용하지 않음
package.json     실행 및 빌드 명령
.gitignore       업로드하지 않을 파일 목록
```

## GitHub Pages로 배포하기

GitHub 저장소의 **Settings > Pages**에서 배포 방법을 **GitHub Actions**로 선택하면 됩니다. Vite 앱을 Pages에 배포하려면 `vite.config.js`의 `base`를 저장소 이름에 맞춰 설정하고, GitHub Actions 워크플로를 추가하는 과정이 필요합니다. 우선 위의 GitHub 업로드와 `npm.cmd run build`를 성공시킨 뒤 배포를 진행하세요.
