// 함수 수정시 문제를 일으킬 수 있는 반복적으로 사용되거나 중복으로 작성되는 코드를 함수로 통합

// 함수 선언 함수를 새롭게 만드는 행위, 함수가 호출되었을 때 어떤 코드를 실행할 지 미리 작업
function greeting(){
    console.log("안녕하세요.")
}
// 함수 호출 함수의 이름을 불러 실행
greeting(); // 소괄호 없이 이름만 적었을 경우 작동 X

// 함수 선언 -> 실행 전 -> 함수 호출(선언한 함수 내부로 이동) -> 실행 후
console.log("실행 전");
greeting();
console.log("실행 후");

// 파라미터를 통해 직접 넘겨준 값으로 함수 실행(let, const는 사용 X)
function getArea(width, height){ // 함수의 특수한 변수=매개변수
    // let width=10;
    // let height=20;
    let area=width*height; //내부에서 값 사용

    function another(){ // 함수 내부 또 다른 함수=중첩함수
        console.log("another");
    }
    another();
    // console.log(area);
    
    // 반환값
    return area;
    console.log("리턴 후에는 종료되기 때문에 만날수 없음");
}
getArea(10, 20); // 함수에 넘겨진 값=인수
getArea(30, 20); 

// 반환 값을 변수에 담아 활용 가능
let area1=getArea(120, 200);
console.log(area1);

// 호이스팅 호출문 아래 선언문이 있어도 문제 없이 실행 선언문을 코드 실행 전 최상단으로 끌어올려 실행
newWork();
function newWork(){
    console.log("호이스팅");
}