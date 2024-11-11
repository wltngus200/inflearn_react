// 반복문으로 배열과 객체 순회하기 배열 객체의 값을 순서대로 하나씩 접근

let arr=[1,2,3];

// 배열 순회 방법 1 : 인덱스
                // 모든 배열이 기본적으로 가지는 프로퍼티(배열도 객체이기때문에 프로퍼티, 메소드 가짐)
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// 배열 순회방법 2 : for of 반복문(배열을 순회하기 위해 존재하는 특수한 반복문) 인덱스 저장 X
let arr2=[4,5,6,7,8];
for(let item of arr2){
    console.log(item);
}
// 배열 순회방법 3 : (내 방식)
let arr3=[9,10,11,12,13]
arr3.forEach(arr3 => {
    console.log(arr3);
});

// 객체
let person={
    name:"이정환",
    age:27,
    hobby:"테니스"   
}
// 객체 순회방법 1 : Object.keys 사용 객체에서 key 값들만 뽑아서 새로운 배열로 사용
let keys=Object.keys(person); // key값의 배열
console.log(keys);
for(let i=0; i<keys.length; i++){
    console.log(keys[i]);
}

for(let item of keys){
    console.log(item);
    // value도 함께 조회하고 싶을 때 = 괄호표기법
    console.log(item, person[item]);
    // 추가 const value=person[item]으로 변수에 저장하고 콘솔에 출력하기도 함
}

// 객체 순회 방법 2 : Object.values 객체에서 value값만 추출해 새로운 배열로 반환
let values=Object.values(person);
console.log(values);
for(let value of values){
    console.log(value);
}

// 객체 순회 방법 3 : for in 객체만을 위해 존재하는 특수한 반복문 key를 차례로 할당
for(let key in person){
    const value=person[key];
    console.log(key, value);
}
// => for of는 배열에만 for in은 객체에만 사용 가능
// 객체 프로퍼티를 확인하는 연산자 중 in 존재 연상해서 암기