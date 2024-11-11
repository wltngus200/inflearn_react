// 배열 메소드 1 요소 조작

// 배열 조작 메소드 1 : push 배열의 맨 뒤에 새로운 요소를 추가 
let arr1=[1,2,3];
const length=arr1.push(5); // 반환된 배열의 길이를 리턴
console.log(length);
console.log(arr1);
arr1.push(6,7,8); // 여러개도 추가 가능
console.log(arr1);

// 배열 조작 메소드 2 : pop 배열의 맨 뒤의 요소를 제거하고 그 요소를 리턴
let arr2=[1,2,3,5];
const poppedItem=arr2.pop();
console.log(poppedItem);
console.log(arr2);

// 배열 조작 메소드 3 : shift 배열에서 맨 앞의 요소를 제외 및 반환하는 메소드
let arr3=[0,1,2,3];
const shiftedItem=arr3.shift();
console.log(shiftedItem);
console.log(arr3);

// 배열 조작 메소드 4 : unshift 배열의 맨 앞에 새로운 요소를 추가하는 메소드 <-> push
let arr4=[2,3];
const length2=arr4.unshift(1); // 변경된 길이를 반환
console.log(length2);
console.log(arr4);

// shift unshift는 push pop보다 느리게 동작 : 배열은 인덱스와 함께 순차적으로 자료 저장하는 것
// 뒤에 새로운 요소를 추가하는 것과 인덱스를 앞뒤로 미뤄야 하는 것의 차이

// 배열 조작 메소드 5 : slice 배열의 특정 범위를 잘라서 새로운 배열로 반환
let arr5=[1,2,3,4,5];
let sliced=arr5.slice(2,5); // 2번 인덱스부터 4번 인덱스까지(5번 인덱스 전까지)
let sliced2=arr5.slice(2); // 끝까지 자를 때는 마지막 인수를 생략해도 됨
let sliced3=arr5.slice(-3); // 배열의 뒤에서부터 잘라내고 싶은 경우엔 음수값
console.log(sliced);
console.log(sliced2);
console.log(sliced3);
console.log(arr5); // 원본 배열이 바뀌지 않음 

// 배열 조작 메소드 6 : concat 서로 다른 2개의 배열을 이어붙여 새로운 배열 반환
let arr6=[1,2];
let arr7=[3,4];
let concatedArr=arr6.concat(arr7);
console.log(concatedArr);

