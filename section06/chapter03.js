// JSX UI 표현하기 리액트 컴포넌트가 화면에 나타나는 UI요소를 표현할 수 있게 도와줌

// 자바스크립트가 html 태그를 리턴하게 만들면 해당 함수는 리액트 컴포넌트
    // but 자바스크립트는 함수가 html 리턴 불가 -> 문법적 오류로 판단
    // 리액트에서는 기존의 자바스크립트 문법 X jsx라는 확장된 자바스크립트 문법 이용
    // JSX(JavaScript Extensions) html 태그 리턴 및 컴포넌트 안 변수 사용 가능
// 변수를 선언하고 중괄호로 감싸 랜더링, 중괄호 내부에는 숫자 문자열로 표현되는 식 모두 사용 가능

// JSX 주의사항
    // 1. 중괄호 내부에는 자바스크립트 표현식(삼항연산자, 값, 변수 이름-한 줄의 코드가 특정한 값-)만 사용 가능 if문 for문 X
    // 2. 숫자, 문자열, 배열 값만 랜더링(불리언 값, truthy 등은 오류는 없느나 출력 X, 객체는 출력시 오류->콘솔 확인, 점표기법으로 객체 출력 가능)
    // 3. 모든 태그는 닫혀 있어야 함 -> 오류 발생
    // 4. 최상위 태그(리턴문 소괄호 안에 가장 높은 곳에 위치한 태그, 모든 태그를 감쌈, 빈 태그도 가능) 는 하나여야 함

// html요소(DOM 요소) 스타일 적용법
    // 1. 요소에 직접적으로 스타일 지정(대시 없이 대문자-카멜케이스-로 표현) -> 가독성 저하
    // 2. 별도의 CSS 파일 className 자바스크립트와 html을 함께 써서 예약어(class)를 사용 할 수 X