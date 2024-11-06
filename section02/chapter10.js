// 반복문 어떠한 동작을 반복해서 수행할 수 있도록 만들어주는 문법

// for(초기식; 조건식; 증감식)
    // 초기식: 반복문 내에서만 이용할 수 있는 특별한 변수를 초기화(몇 번 진행되었는지 count)
    // 조건식: 반복문이 언제까지 반복할 지를 설정(조건이 참일때에만 진행)
    // 증감식: 반복이 될 때마다 idx의 값을 변화시키는 용도
for(let idx=0;idx<10;idx++){
    console.log("반복");
}

// 조건식이 거짓이 아니더라도 중지 시키는 방법
for(let idx=1;idx<=10;idx++){
    console.log("break 반복");
    if(idx>=5){break;}
}
// 반복의 특정 회차를 건너뛰는 법
for(let idx=0;idx<10;idx++){
    if(idx%2==0){continue;}
    console.log("countinue 반복");
    if(idx>=5){break;}
}
