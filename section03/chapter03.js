// 구조분해할당 배열이나 객체에 저장된 값들을 분해해서 각각 다른 변수에 할당

// 배열의 원소를 각각의 변수에 할당하는 상황
let arr=[1,2,3];
// 배열 속에 변수를 선언하고 초기값으로 배열
// let [one, two, three]=arr;
// 저장을 원하지 않는 변수는 배열에서 뺌
// let [one, two]=arr;
// 배열의 개수를 초과하는 경우 undefined(=초기화가 되지 않은 변수값)로 정의
// let [one, two, three, four]=arr;
// 값이 모자랄 경우를 대비해 기본값 정의도 가능
let [one, two, three, four=4]=arr;
console.log(one, two, three, four);

// 객체의 구조분해 할당
let person={
    name:"이정환",
    age:27,
    hobby:"테니스"
}
// let {age, name}=person;
// let {age, hobby, name}=person;
// let {age, hobby, name, extra}=person;
// let {age, hobby, name, extra="빈칸"}=person;
// 프로퍼티의 값을 다른 변수이름에 저장하고 싶은 경우 (프로퍼티 명):(원하는 이름)
let {age:myAge, hobby, name}=person;
console.log(name, myAge, hobby);

// 함수에 여러 개의 인수를 전달할 때 자주 쓰임

// 객체 구조분해할당을 활용해 함수의 매개변수를 받는 방법
const func=({name, age, hobby, extra})=>{ // 객체를 넘겼을 때만 중괄호와 함께 구조분해 할당 사용가능
    console.log(name, age, hobby, extra);
};
func(person);