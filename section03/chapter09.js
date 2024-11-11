// 배열 메소드 3 변형 기존의 배열을 변환해 새로운 배열로 반환 또는 문자열로 반환

// 배열 변형 메소드 1 : filter 기존 배열에서 조건을 만족하는 요소만 필터링하여 새로운 배열로 반환
// find findIndex와 비슷한 문법 -> 콜백함수 사용
let arr1=[
    {name:"이정환", hobby:"테니스"},
    {name:"김효빈", hobby:"테니스"},
    {name:"홍길동", hobby:"독서"}
];
const tennisPeople=arr1.filter((item)=>{item.hobby==="테니스"}); // 조건식만으로 구분 가능
console.log(tennisPeople);
// 특정 조건에 의해 검색하는 기능, 카테고리별 필터를 만드는데 필수적으로 사용
// 매개변수로 요소, 인덱스, 배열을 받음

// 배열 변형 메소드 2 : 모든 요소를 순환하면서 각각 콜백함수를 실행하고 결과값을 모아 새로운 배열로 반환
let arr2=[1,2,3];
const mapResult1=arr2.map((item, idx, arr)=>{
    // console.log(idx, item); // forEach와 동일하게 작용
    return item*2 // 반환값 설정 가능 -> 콜백함수가 리턴한 값들을 모아 새로운 배열로 리턴
})
console.log(mapResult1);

// map 메소드의 활용
let names=arr1.map((item)=>item.name);
console.log(names);

// 배열 변형 메소드 3 : sort 배열을 사전 순으로 정렬
let arr3=["c", "b", "a", "d"];
arr3.sort();
console.log(arr3);

let arr3_2=[10, 3, 5];
arr3_2.sort();
console.log(arr3_2); // 숫자 배열은 정상 작동하지 않음(사전순 정렬이기 때문 대소비교 X)
// 대소를 비교하는 메소드를 함께 전달
arr3_2.sort((a,b)=>{ // 오름차순 정렬 (내림차순은 반대로)
    if(a>b){
        // b가 a 앞으로
        return 1;
    }else if(a<b){
       // a가 b의 앞
       return -1; 
    }else{return 0;}
});
// cf. https://reactjs.winterlood.com/fc0a951e-41cd-4cc5-8f47-7507965bbe41#8f2d70d5e8334377bb56f0a3f9101de2

// 배열 변형 메소드 4 : toSorted(최근 출시) 원본 배열은 건드리지 않고 새로운 배열을 반환
let arr5=["c", "a", "b"];
const sorted=arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 배열 변형 메소드 5 : join 배열의 모든 메소드를 하나의 문자열로 합쳐서 반환
let arr6=["hi", "im", "winterlood"];
const joined=arr6.join("-"); // separator = 구분자
console.log(joined); 