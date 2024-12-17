// React App 생성
// React로 만든 웹 서비스들은 Recact App, React Application -브라우저위에서 동작하는 앱-이라고 불림(다양한 기능 가짐)
// React도 npm에 등록된 자바스크립트의라이브러리

// ReactApp 생성법
// 1. Node.js 패키지 생성 2. React 라이브러리 설치 3. 기타 도구 설치 및 설정 -> 3번이 어려워 입문자에게 추천 X
// Vite 프론트엔드 개발 툴 기본 설정이 적용된 React App 생성 가능

// 터미널에 npm creat vite@latest -> 프로젝트 이름 or 패키지 설치 여부 질문
    // React 앱을 생성하기 위해서 create vite라는 패키지를 설치해야 한다는 질문
// 이름을 입력하면 어떤 프레임워크를 사용할지 질문(방향키 이동) -> 버전 질문 -> 생성 완료

// React 또한 Node.js 패키지(package.json 파일 존재)
    // devDependencies는 개발할 때만 사용하는 라이브러리 저장 ex. 문법 체크도구, 테스트 도구
// node_modules, package_lock.json이 없음 -> 설치 X package.json 내용을 기반으로 라이브러리 설치(터미널에 npm install)

// 자동 생성된 폴더 및 파일의 역할
// public vite.svg 등 이미지 파일(png, jpg), 폰트, 동영상 등 정적파일 보관
// src react JavaScript 코드 보관 app.css, App.jsx(리액트에서 사용되는 특수한 확장자) 같은 자바 스크립트 파일
    // assets react.svg 이미지 파일 등 정적 파일 보관 -> public과 차이
// eslintrc.cjs eslintrc(개발자들 간의 코드 스타일 통일)라는 도구의 설정 파일
// gitignore github에 올리면 안 되는 파일
// index.html 리액트 앱의 기본 틀 역할을 하는 html 코드 -> UI요소를 HTML로 만듦 src app.jsx 자바스크립트 함수(컴포넌트)로 만듦 -> 컴포넌트를 index.html에 나중에 DOM을 수정해서 추가할 때 기본 틀
// vite.config.js vite 도구의 옵션을 설정


// react app의 실행 package.json script 항목에 명령어 dev가 react 앱을 개발용으로 실행
// npm run dev -> 링크로 페이지 이동 및 h를 눌러 단축키 확인