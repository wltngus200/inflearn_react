// 콜백함수 자신이 아닌 다른 함수에 인수로서 전달된 함수, 인수로서 전달되며 나중에 호출되도록
// callback 뒷전에 실행되는, 나중에 실행되는 이라는 의미
function main(value){
    // console.log(value);
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

// function sub(){
//     console.log("I am sub");
// }
// main(sub);

// + 함수 표현식 + 익명함수 + 화살표 함수
main(()=>{
    console.log("I am sub");
});

// 활용
function repeat(count){
    for(i=1; i<=count; i++){
        console.log(i);
    }
}
repeat(5);

function repeatDouble(count){
    for(i=1; i<=count; i++){
        console.log(i*2);
    }
}
repeatDouble(5);

function repeatCallBack(count, callback){
    for(i=1; i<=count; i++){
        callback(i);
    }
}
repeatCallBack(5, function(i){console.log(i+" times");});
repeatCallBack(5, function(i){console.log(i*2+" times");});
repeatCallBack(5, function(i){console.log(i*3+" times");});

// 화살표 함수로 바꾸면 좀 더 간결