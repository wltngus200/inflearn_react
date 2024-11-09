// 단락평가 && || 등 논리 연산식에서 첫번째 조건에서 결과를 도출할 수 있다면 뒤의 식엔 접근 하지 않음
            // 조건문을 이용하지 않고도 특정 상황에서 어떤 함수를 호출하지 않도록 방지해 주거나 계산을 제한

function returnFalse(){
    console.log("false 함수");
    return false;
}
function returnTrue(){
    console.log("true 함수");
    return true;
}

console.log(returnFalse() && returnTrue());
// 첫 번째 값 만으로는 논리연산의 결과가 도출되지 않음
console.log(returnTrue() && returnFalse());

console.log(returnTrue() || returnFalse());
// 특정 조건에 맞춰서 함수를 호출하지 않도록 방지할 수 있는 기능을 가짐

// truthy & falsy에도 적용 가능
function returnFalsy(){
    console.log("falsy 함수");
    return undefined;
}
function returnTruthy(){
    console.log("truthy 함수");
    return 10;
}

// 연산의 결과 자체가 truthy하거나 falsy한 값 자체가 되어버림
console.log(returnTruthy() || returnFalsy());
console.log(returnFalsy() && returnTruthy());


// 단락평가의 활용
function printName(person){
    if(!person){
        console.log("person에 값이 없음");
        return;
    }
    console.log(person.name);
}
function printName2(person){
    // person 객체가 undefined한 값일 경우 두번째를 실행 X
    console.log(person && person.name);
}
printName2();
function printName3(person){
    const name=person && person.name;
    // or의 경우 두 가지 모두 truthy한 값일 경우 앞의 값을 출력(&&의 경우 뒤의 값 출력)
    // name에 값이 들어가 있다면 뒤의 문자열을 출력하지 않음
    console.log(name||"person에 값이 없음");
}
printName3();
printName3({name:"이정환"});