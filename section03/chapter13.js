// 비동기 작업 처리 promise 비동기작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장객체
    // setTimeout같은 비동기 작업을 감싼 객체 -> 실행, 관리, 저장, 실행 등 기능

// promise는 비동기 작업을 3가지 상태로 구분 대기, 성공, 실패(네트워크 에러, 코드 작성문제)
    // 대기 -> 성공 = 해결, 대기 -> 실패 = 거부

                        // 비동기작업을 실제 수행할 콜백함수 = Executor
                            // Executor의 2가지 매개변수 = resolve(작업 상태를 성공으로 바꿈), reject(비동기 작업을 실패로 바꿈)

const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const num="10"; 

        if(typeof num==="number"){
            resolve(num+10);
        }else{
            reject("num이 숫자가 아닙니다.");
        }

        // console.log("안녕");
                // 결과값 변화 
        // resolve("안녕~"); // 성공으로 전환
        // reject("실패한 이유..."); // 실패로 전환
    },2000);
});

// console.log(promise); // 상태 = 대기, 결과값 undefined

// setTimeout(()=>{ // promise가 실행된 이후 호출됨 상태 = 성공/실패
//     console.log(promise);
// },3000);

// promise의 결과값 이용 then메소드(resolve를 호출하게 되면 사용) -> promise를 반환
promise.then((value)=>{console.log(value);})
        .catch((error)=>{console.log(error)}); // promise chaining 

// promise가 실패한 경우의 catch메소드(reject를 호출하게 되면 사용)
// promise.catch((error)=>{console.log(error)})

function add10(num){
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof num==="number"){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });    
    return promise;
};
    // promise 객체
const p=add10(0);
p.then((result)=>{
    console.log(result);
    // promise 객체의 리턴 값에 다시 함수 적용
    const newP=add10(result);
    // newP.then((result)=>{
    //     console.log(result);
    // }); 리턴 시킴
    // then 메소드 내에서 새로운 프로미스 객체 
    return newP
}).then((result)=>{
    console.log(result);
    // 변수에 저장하지 않고 바로 메소드 호출을 하면 더 간결하게 작성 가능
    return add10(undefined);
}).then((result)=>{console.log(result) 
// 위의 어느 then 메소드에서든 에러 발생 시 실행됨
}).catch((error)=>{console.log(error)});

// API호출 다른 서버 통신 등 광범위하게 활용됨