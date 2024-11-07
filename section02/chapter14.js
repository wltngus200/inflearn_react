// 스코프 범위라는 뜻이로 변수나 함수에 접근할 수 있는 범위

// 전역스코프 전체 영역에서 접근 가능
let a=1;
function funcA(){
    console.log(a);
}
funcA();

// 지역스코프 특정 영역에서만 접근 가능
function funcB(){
    let b=2;
    console.log(b);
}
funcB();
// console.log(b); 스코프의 유효 범위를 벗어나 사용 X

// 함수 뿐만 아니라 조건문, 반복문에도 활용 가능 중괄호 안의 블록에 따라 결정
if(true){
    let c=1;
}
// console.log(c);
for(let i=0; i<5; i++){
    let d=1;
}
// console.log(d);
// console.log(i);

// 반복문, 조건문, 함수처럼 중괄호 안에 선언된 변수는 지역 스코프, 중괄호 외부에서는 접근 X
// + 반복문의 초기식도 지역 스코프 + 함수도 다른 함수 안에서 선언되었다면 외부에서 접근 불가

function func1(){
    console.log("지역스코프");
    function func2(){
        console.log("함수");
    }
    func2();
}
func1();
// func2(); 함수도 스코프에 따라 접근범위가 달라짐 but 조건문, 반복문에서는 호출 가능
 
for(i=0; i<5;i++){
    function func3(){
        console.log("반복문");
    }
    func3();
}
func3(); // 반복문 내부 선언 함수
if(true){
    function func4(){
        console.log("조건문");
    }
    func4();
}
func4(); // 조건문 내부 선언 함수