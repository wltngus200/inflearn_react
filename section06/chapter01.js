// 실습 준비 리액트 앱 생성을 위해 불필요한 파일 삭제, 별도 옵션 설치 등
// npm create vite@latest > npm i > npm run dev

// 불필요한 파일 삭제
// src > app.jsx > svg파일 불러오는 것 + svg 파일
// app 함수 내부의 useState 함수 및 import문
// 리턴 HTML 태그 대신 <h1> 태그, index, App.css 내용 전체
// main.jsx에서 render 메소드 인수 <StrictMode> 양쪽 태그 삭제
    // 작성한 코드에 잠재적인 문제가 있는지 내부적으로 검사해서 경고

// extensions 탭에서 eslint
    // 작성한 코드를 정적으로 검사해서 오류 발생 가능성 있는 코드에 경고
    // 옵션 설정 no-unused-vars(코드상 실제로 사용하지 않는 변수를 오류로 알려줌), react/prop-types(리액트를 안전하게 사용하는 옵션)