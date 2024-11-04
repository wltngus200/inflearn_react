// 형변환(type casting) : 어떤 값의 타입을 다른 타입으로 변경하는 것
// 묵시적 형변환(암묵적 형변환) 개발자가 설정하지 않아도 자바스크립트 엔진이 변환 <-> 명시적 형변환 : 개발자가 함수등으로 형변환

// 묵시적 형변환 : 특정 하나의 변수를 변환했을 때 오류가 발생하지 않고 연산이 잘 종료되는 경우에 한함
let num=10; 
let str="20";
const result=num+str;
console.log(result);

// 명시적 형변환 : 개발자가 내장함수(JS 기본 제공)를 통해 직접 수행
let str1="10";
let str1ToNum=Number(str1);
console.log(10+str1ToNum);
// 숫자 외의 문자열이 포함된 경우 수행 할 수 없음 -> NaN
let str2="10개"
let str2ToNum=Number(str2);
console.log(10+str2ToNum);
// 숫자와 문자의 조합(단, 숫자가 앞이어야 함)인 문자열의 경우 parseInt를 사용
let str2ToNum2=parseInt(str2);
console.log(11+str2ToNum2);

let num1=20;
let num1ToStr=String(num1);
console.log(num1ToStr+"입니다");
