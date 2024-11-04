// 자료형 type 동일한 속성이나 특징을 가진 원소들을 묶은 집합
// 원시타입: Number, String, Boolean, Null, Undefined <-> 객체타입: Object(Array, Function, RegexExp) 

// 원시타입(기본형 타입) : 프로그래밍에 있어 가장 기본적인 값의 자료형
// Number : 존재할 수 있는 모든 숫자값 포함(정수 실수 음수)
let num1=27; 
let num2=1.5;
let num3=-20;
// 사칙연산 지원
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2); // 모듈러 연산

// 특수한 숫자값
let inf=Infinity; // 양의 무한대
let mInf=-Infinity; // 음의 무한대
let nan=NaN; // Not A Number 수치연산이 실패 했을 때 결괏값(다른 언어에 비해 수학 연산에 유리)
console.log(1*"hello");

// String : 큰 따옴표, 작은 따옴표로 감싸주지 않으면 변수명으로 인식해 오류 발생
let myName="이정환";
let myLocation="목동";
// 문자열 타입의 덧셈 연산
let introduce=myName+myLocation; 
console.log(introduce);
// 문자열의 또 다른 표현법 백틱(`), 중괄호 안에 변수의 값을 동적으로 입력
let introduceText=`${myName}은 ${myLocation}에 거주합니다.` // 탬플릿 리터럴
console.log(introduceText);

// boolean : 참과 거짓을 의미, 현재의 상태를 의미하는 변수에 사용
let isSwitchOn=true;
let isEmpty=false;

// null : 아무것도 없다라는 의미, null 이라는 단 하나의 값만 가지는 특수한 타입, 명시적으로 할당을 해 줘야 하는 값(개발자들이 변수에 어떠한 값도 없다고 표현하는 값)
let empty=null;
console.log(null);

// undefined : undefined라는 단 하나의 값만 가지는 특수한 타입, 선언만 하고 초기화 하지 않은 변수에 주어지는 값
let none;
console.log(none);

