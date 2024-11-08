// Truthy&Falsy  참 또는 거짓을 의미 하지 않는 값다 조건문 내에서 참이나 거짓으로 평가
// 자바스크립트의 모든 값은 참 같거나 거짓 같은 값이기 때문에 이를 활용하면 조건문을 간결하게 쓸 수 있음

// Falsy한 값 7개
let f1=undefined;
let f2=null;
let f3=0;
let f4=-0;
let f5=NaN;
let f6="";
let f7=0n; // Big Integer

if(!f2){
    console.log("falsy");
}

// Truthy한 값 falsy를 제외한 모든 값
let t1="hello"; // 비어있지 않은 문자열
let t2=123; // 0이 아닌 숫자
let t3=[]; // 배열
let t4={}; // 객체
let t5=()=>{}; // 화살표 함수

if(t2){
    console.log("truthy");
}

// 활용 사례
function printName(person){ 
    // 아래처럼 매개변수로 객체를 받을 거라 예상했는데 undefined인 경우 오류 발생
    // if(person===undefined){ // null일 경우를 수용하지 못 함
    // if(person===undefined || person===null){ 
    if(!person){ // falsy 값이 들어오면 true로 바꿔줌
        console.log("person의 값이 없음");
        return; // 아래의 console.log()에 접근하지 못 함
    }
    console.log(person.name);
}
let person={name:"이정환"};
// let person; // person의 값이 undefined
printName(person);