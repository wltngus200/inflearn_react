// 객체 

// 상수 객체 상수에 저장한 객체
const animal={
    type:"고양이",
    name:"나비",
    color:"black"
}
console.log(animal);

// 상수 객체에 새로운 객체를 생성해서 할당 X
// animal={a:1};

animal.age=2; // 프로퍼티 추가
animal.name="까망이" // 기존 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제
console.log(animal);

// 상수란 새로운 값을 할당하지 못 하는 것 <-> 저장된 객체의 프로퍼티를 수정하는 것
// animal=123;

// 메소드 값이 함수인 프로퍼티 지칭, 이 객체의 동작을 정의(함수가 아닌 프로퍼티는 정보를 저장)
const person={
    name:"이정환",
    // 메소드(익명함수)
    sayHi:function(){
     console.log("hello");   
    },
    // 화살표 함수
    tellMe:()=>{console.log("좋은 아침");},
    // 메소드 선언 
    letsGo(){console.log("공원에 가자");}
}

// 메소드는 함수이기 때문에 호출도 가능
person.sayHi();
person.tellMe();
person.letsGo();