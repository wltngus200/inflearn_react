// 변수, 상수 : 값을 저장하는 저장소
console.log("chapter 4");
// ctrl + shift + p > live server

// 변수 선언 let 및 값을 넣는 초기화
let age;
console.log(age);
// 초기화가 되지 않은 상태에서의 변수값 undefined

age=27;
console.log(age);

age=30;
console.log(age);

// 변수들은 이름으로 구분되기 때문에 중복된 이름 사용 불가
// let age=2;

// => 변수: 프로그램이 실행되는 도중에 값을 변경해서 저장하는 저장소

// 상수 선언 const 및 초기화
// 상수 : 한 번 저장된 값을 바꿀 수 X, 생일처럼 변하지 않거나 변하면 안 되는 값에 저장
const birth="1997.01.07";
birth=123; // 콘솔창에서 오류 발생
// 상수는 변경할 수 없는 값이기 때문에 초기화 필수(선언 이후에 값을 넣을 수 없음)
// const id;

/* 변수나 상수의 이름을 정하는 행위를 변수 명명 또는 변수 네이밍
    1. $ 및 _를 제외한 특수 기호는 사용할 수 없음
    2. 변수의 이름은 숫자로 시작할 수 없음(1에 정의된 특수문자는 괜찮음)
    3. 예약어(ex. let, const)는 사용할 수 없음
    4. 누가 봐도 이해하기 쉬운 변수명 지정 ex. salesCount, refundCount, totalSalesCount
*/ 
