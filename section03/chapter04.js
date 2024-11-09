// Spread 연산자 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려줌
// arr2의 요소의 중간에 arr1의 요소들을 넣기 ex. 4, 1, 2, 3, 5, 6
let arr1=[1,2,3];
// let arr2=[4,5,6];
let arr2=[4, ...arr1, 5,6]; // arr1의 배열이 바뀌더라도 적용됨
console.log(arr2);

let obj1={
    a:1,
    b:2
}
let obj2={
    c:3,
    ...obj1,
    d:4
}
console.log(obj2);

function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}
funcA(...arr1);

// Rest 매개변수 나머지 매개변수 여러개의 매개변수를 받아야 할 때, 배열형태로 한 번에 여러개의 매개변수
                // 매개변수를 정의하는 공간에 사용된 ... 은 rest 매개변수
// function funcB(...rest){
function funcB(a, ...rest){ // 첫 번째 매개변수는 다른 이름으로 받고 싶은 경우
                    // ...만 붙으면 되고 이름은 상관 X
// function funcB(a, ...rest, four){ // rest 이후에는 추가적으로 매개변수를 선언할 수 없음(항상 마지막)
    console.log(rest); // 배열의 형태
}

funcB(...arr1);