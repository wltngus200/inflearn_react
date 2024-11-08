// 배열 여러개의 값을 순차적으로 담을 수 있는 자료형


// 배열의 생성방법 1 : 배열 생성자
let arrA=new Array(); 
// 배열의 생성방법 2 : 배열 리터럴(주로 사용)
let arrB=[]; 

let arrC=[1,2,3,
    // 배열 안의 요소의 타입에는 제약이 X, 길이에도 제약 X
    true, "hello", null, undefined, ()=>{}, []
];
console.log(arrC);

// 인덱스를 통해 배열의 요소에 접근
let item1=arrC[0];
let item2=arrC[7];
console.log(item1, item2);

// 배열의 요소 수정
arrC[5]="Java Script";
console.log(arrC);