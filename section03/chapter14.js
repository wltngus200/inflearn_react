// async / await

// async 함수 앞에 붙이는 키워드로 함수를 비동기 함수로 만듦(promise 객체를 반환하지 않는 함수가 promise를 반환)
// 키워드로 인해 비동기 함수로 바뀜 -> 리턴하는 객체를 결과값으로 갖는 새로운 promise객체를 반환

// 서버로부터 유저의 데이터를 가져오는 함수
async function getData(){ 
    // return {
    //     name:"이정환",
    //     id:"winterlood"
    // }
    return new Promise((resolve, reject)=>{ // 코드상 프로미스 객체를 리턴하는 경우 이 객체를 리턴
        setTimeout(()=>{
            resolve({
                name:"이정환",
                id:"winterlood"
            });
        },1500)
    }); 
}
console.log(getData());

// await async함수 내부에서만 사용 가능한 키워드로 비동기 함수가 다 처리되기를 기다림
function printData(){
    // async 키워드로 promise 반환
    getData().then((result)=>{console.log(result)});
};

printData();

// async와 await을 사용하면 then 메소드 필요 X -> 비동기 작업을 간결하게 작성 가능
async function printData2(){
    // async 함수 내의 함수의 호출 앞에 await -> 해당 메소드가 반환하는 promise 종료를 기다림
    const data=await getData();
    console.log(data);
};

printData2(); // printData와 같은 결과