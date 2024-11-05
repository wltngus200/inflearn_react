// 자바스크립트에서만 제공되는 특수한 연산자

// null병합 연산자 존재하는 값을 추려하는 값을 추려내는 기능 null, undefined가 아닌 값을 찾음
let var1;
let var2=10;
let var3=20;
let var4=var1??var2;
console.log(var4);
let var5=var1??var3;
console.log(var5);
// 두 가지 모두 값이 존재할 경우 앞에 적힌 값이 반환
let var6=var3??var3;
console.log(var6);
// 회원 관리 시스템을 할 떄 자주 사용
let userName="이정환";
let userNickName="winterload";
// 이름을 저장하고, 이름이 없을 경우 닉네임
// 둘 다 없을 경우엔 후자에 귀속됨
let displayName=userName??userNickName;
console.log(displayName);

// typeOf 연산자 : 고정되어있지 않은 JS 변수의 값 타입을 문자열로 반환하는 기능을 하는 연산자
let var7=1;
var7="hello";
var7=true;
let t1= typeof var7;
console.log(t1);

// 삼항연산자 3개의 항을 활용해 조건식을 사용
let var8=10;
let res=var8%2===0?"짝수":"홀수";
console.log(res);