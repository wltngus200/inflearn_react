// React 페이스북(메타)가 개발한 오픈소스 자바스크립트 라이브러리(대규모 웹 서비스 UI를 편하게 개발)

// 장점 1. 컴포넌트 기반 UI
// 컴포넌트 화면, UI를 구성하는 요소
// 웹 페이지가 Header-Main-Footer 각각의 영역을 분리해 자바스크립트 파일에 컴포넌트라는 단위로 나눠 모듈화해서 보관
// 컴포넌트를 자바스크립트 파일로 모듈화 가능한 것 -> 중복코드 제거 관점에서 메리트
// Header를 사용하는 모든 페이지에 마크업(UI 구현) -> 수정시 불편함
// 리엑트는 Header 컴퍼넌트를 만들고 여러 페이지에서 불러와서 사용

// 장점 2. 화면 업데이트 구현이 쉬움
// 업데이트 사용자의 행동에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것
// 리액트는 선언형 프로그래밍으로 동작
// 선언형 프로그래밍 과정은 생략하고 목적만 간력히 명시 <-> 명령형 프로그래밍 목적을 이루기 위한 일련의 과정을 설명하는 방식
// 각각의 컴포넌트에 현재 컴포넌트의 상태를 변수로 저장 -> 변수의 값이 바뀐 것에 맞춰 다른 UI를 화면 렌더링(UI 요소를 그려내는 것)
// => 업데이트를 위한 복잡한 동작을 정의 X 변수의 값을 바꾸는 것으로 화면 업데이트 가능

// 장점 3. 화면 업데이트가 빠르게 처리
// 브라우저의 웹 페이지 렌더링 과정(Critical Rendering Path)
// 1. HTML과 CSS를 각각 DOM(Document Object Model)과 CSSOM(Object Model)으로 변환
    // DOM(요소 위치, 배치, 모양 정보), CSSOM(요소 스타일 정보) HTML, CSS 코드를 브라우저가 이해하기 쉬운 방식으로 변환
// 2. 위의 두 가지를 합쳐서 Render Tree(웹 페이지 청사진, 설계도 -화면에 나타날 요소의 모든 정보 가짐-)를 만듦
// 3. LayOut 요소의 배치를 잡는 작업
// 4. Painting 실제로 화면에 그려내는 과정
// => 화면의 업데이트는 자바스크립트가 DOM을 수정하게 되면 이후의 과정을 실행하며 업데이트
    // LayOut, Painting은 오래 걸리는 과정
    // DOM이 수정되어 레이아웃이 다시 진행되는 것을 리플로우, 페인팅을 다시 하는 것을 리페인팅
    // DOM 수정을 최소화 동시에 발생한 업데이트를 모아 수정 -> 서비스 규모가 커질수록 힘들어짐 -> React가 자동화

// React는 내부적으로 Virtual DOM(실제 브라우저가 렌더링하는 DOM을 카피한 것)을 이용
// Virtual DOM이 일종의 버퍼 역할(업데이트를 모아두는 장소)