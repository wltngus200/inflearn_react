// 객체 원시타입이 아닌 자료형으로 여러가지 값을 동시에 저장할 수 있음 -> 현실 세계에 존재하는 어떤 사물이나 개념을 표현하기에 용이

// 객체 생성 방법 1 : 객체 생성자(내장함수)
let obj1=new Object();
// 객체 생성 방법 2 : 객체 리터럴(자주 쓰임)
let obj2={};

let person={
    // 객체 프로퍼티(객체 속성) 실질적인 정보를 담는 역할 -> key:value 키의 이름으로 불림
    name:"이정환",
    age:27,
    hobby:"테니스",
    job:"FE Developer",
    // value로는 어떤 값이 와도 상관 X 
    // extra:true
    // extra:{}
    // extra:function func(){}
    // key는 문자열이나 숫자만 사용 가능
    10:20,
    // 기본적으로 key는 따옴표를 쓰지 않아도 되지만 띄어쓰기가 있는 문자열의 경우 따옴표
    "like cat": true
}

// 프로퍼티에 접근, 추가, 삭제

// 프로퍼티에 접근 하는 법 1 : 점 표기법
let name=person.name;
let nameUnd=person.name2; // 존재하지 않는 key에 접근시 오류 X -> undefined
console.log(name); // 취소선은 타입스크립트와 관련된 경고 VSCode 기본 기능
console.log(nameUnd); 
// 프로퍼티에 접근 하는 법 2 : 괄호 표기법
let age=person["age"]; // 쌍타옴표로 감싸 문자열로 감싸지 않으면 변수로 인식
console.log(age);
// 점 표기법과 마찬가지로 존재하지 않는 key를 호출하면 undefined 반환
// 변수에 출력하고자 하는 key값을 문자열로 담아 사용할 수도 있음 -> 동적으로 프로퍼티가 변화할 경우 사용
let property="hobby";
let hobby=person[property];
console.log(hobby);

console.log(person);

// 프로퍼티 추가
person.gender="남자";
console.log(person);
person["addr"]="목동";
console.log(person);

// 프로퍼티 수정
person.name="이동민";
person["age"]=24;
console.log(person);

// 프로퍼티 삭제
delete person.job;
console.log(person);
delete person["addr"];
console.log(person);

// 프로퍼티 존재유무 확인
let result1="name" in person; // T/F 반환
console.log(result1);
let result2="cat" in person;
console.log(result2);
