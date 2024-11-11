// 배열 메소드 2 순회와 탐색

// 배열 순회 메소드 1 : forEach 모든 요소를 순회하면서 각각의 요소에 동작 수행, 인수로 콜백함수
let arr1=[1,2,3];
arr1.forEach(function (item, idx, arr){ 
    console.log(idx, item*2);
})
let doubledArr=[];
arr1.forEach((arr1)=>{
    doubledArr.push(arr1*2);
})
console.log(doubledArr);

// 배열 탐색 메소드 1 : includes 배열에 특정요소가 있는지 확인
let arr2=[1,2,3];
let isInclude=arr2.includes(10);
console.log(isInclude);

// 배열 탐색 메소드 2 : indexOf 특정 요소의 인덱스를 찾아 반환
let arr3=[2,2,2]; // 여러 개 존재할 경우 앞에서부터 탐색해 제일 빠른 번호 리턴
let index=arr3.indexOf(22); // 배열 내에서 이 값을 찾아 인덱스 반환
console.log(index); // 존재 하지 않을 경우 -1 리턴

// 배열 탐색 메소드 3 : findIndex 콜백함수를 만족(true를 리턴)하는 특정 요소의 인덱스를 반환 
let arr4=[1,2,3];
// const findedIndex=arr4.findIndex((item)=>{
//     if(item%2!==0) return true;
// })
// 간단한 표기법
const findedIndex=arr4.findIndex((item)=>item%2!==0);
console.log(findedIndex);
// 조건에 일치하는 요소가 없을 경우 -1을 리턴

// indexOf는 객체타입의 요소가 들어있을 경우 잘 작동하지 않음
let objectArr=[{name:"이정환"}, {name:"홍길동"}];
// indexOf : 괄호 안의 입력된 요소와 같은 값을 갖는 요소의 인덱스번호 리턴
console.log(objectArr.indexOf({name:"이정환"})); // 얕은 비교(===)로 동작 즉 주소값이 다름
// findIndex : 괄호 안 콜백함수의 조건을 만족하는 요소의 인덱스번호 리턴
console.log(objectArr.findIndex((item)=>item.name==="이정환"));
// => indexOf는 특정 값을 찾을 때 얕은 비교를 하기 때문에 객체 값을 찾지 못 함(원시타입)
// => findIndex는 콜백함수를 통해 특정 프로퍼티의 값을 비교할 수 있기 때문(객체타입)

// 배열 탐색 메소드 4 : find 모든 요소를 순회하며 콜백함수를 만족하는 요소를 그대로 반환( ≒ findIndex)
let arr5=[{name:"이정환"}, {name:"홍길동"}];
const finded=arr5.find((item)=>item.name==="이정환");
console.log(finded);