// 함수 표현식과 화살표 함수

function funcA(){
    console.log("funcA");
}
let varA=funcA; // 함수 그 자체를 담는 것
// let varA=funcA(); // 호출해서 반환값을 담는 것
console.log(varA); // 함수 자체가 출력 -> 함수도 하나의 값으로 취급
varA(); // 함수를 담은 변수 이름으로 함수 호출

// varB(); // 함수 표현식을 통한 생성은 호이스팅 불가

// 함수 표현식 함수를 선언문을 통해 함수를 만들지 않고 변수에 담아 값으로 함수를 생성 -> 호이스팅 불가능
        // 선언되지 않고 변수에 담긴 함수는 호출 할 수 없기에 이름을 생략해도 무관=익명함수
let varB=function(){ // 선언식은 변수의 값으로 담기지 않은 상태여야 하기 때문에 함수 선언식 X 
    console.log("funcB");
}
varB(); 
// funcB(); 선언되지 않았기 때문에 이름으로 부를 수 없음 -> 이름을 생략해도 문제 X

// 화살표 함수 함수를 이전보다 더 빠르고 간결하게 생성
// function을 지우고 소괄호와 중괄호 사이에 =>
// let varC=function(){
//     return 1;
// }
// let varC=(value)=>{
//     console.log(value);
//     return value+1;
// }
// 단순히 값을 반환만 한다면 중괄호와 리턴문도 지움
let varC=(value)=>value+1;
console.log(varC(5));
