// math 모듈 -> index.js에서 불러와 사용

function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

/* Common JS(CJS) 모듈 내장 객체에 exports라는 프로퍼티 값으로 객체 저장
module.exports={
    // add: add, value와 key가 같을 때는 둘 중 하나만
    add,
    sub
}
*/

// 두 모듈 시스템은 함께 사용할 수 X

/* ES Module 패키지 내에서 ES Module 사용하겠다고 설정 -> package.js */
// export 키워드 뒤에 객체를 리터럴로 생성해 내보내고 싶은 값 담아주기
export{add, sub};

// 함수 앞에 export라는 키워드도 괜찮음
export function print(a, b){
    return console.log(a, b);
}

// 하나의 모듈을 대표하는 디폴트값 내보내기 가능
export default function multiply(a, b){
    return a*b;
}