// 연산자 : 프로그래밍에서 다양한 연산을 위한 키워드 및 기호

console.log("chapter 7");

// 대입연산자 변수에 값을 저장할 때 사용
let var1=1;

// 산술연산자 +,-,*,/,% (사칙 연산의 우선순위 반영)
let num1=3+2;
let num2=3-2;
let num3=3*2;
let num4=3/2;
let num5=3%2;

let num6=1+2*10;
console.log(num6);
let num7=(1+2)*10;
console.log(num7);

// 복합대입연산자 산술연산자와 대입연산자가 복합되어있음(모든 산술연산자와 대응)
let num8=10;
num8=num8+20;
console.log(num8);
num8=10;
num8+=20;
console.log(num8);

// 증감연산자
let num9=1;
            // 후위연산 : 변수 뒤에 연산자를 쓰게 되면 이 행이 끝나며 1이 증가
console.log(num9++);
            // 전위연산 : 변수 앞에 쓰면 해당 행에서 1이 증가한 값으로 사용 가능
console.log(++num9);

// 논리연산자 Boolean 타입을 다룰 때 사용
let or=true||false;
let and=true&&false;
let not=!false;
console.log(or, and, not);

// 비교연산자 
// 동등비교연산자
let comp1= 1===2;
// 비동등비교연산자
let comp2= 1!==2;
console.log(comp1, comp2);
            // 비교는 가능하나 자료형이 같은지까지는 비교 X
let comp3= 1==1; 
let comp4= 1=="1";
let comp5= 1==="1";
console.log(comp3, comp4, comp5);

let comp6= 2>1;
let comp7= 2<=1;
console.log(comp6, comp7);
