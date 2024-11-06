// 조건문 특정 조건을 만족했을 때만 실행되는 코드를 작성하기 위한 문법 if switch

// if if로 시작해서 else로 끝내야 함(else는 생략 가능)
let num=9;
if(num>10){
    console.log("num은 10보다 큽니다.");
    console.log("조건이 참입니다.");
}
else if(num===10){ // 추가적인 조건 작성 여러개 작성 가능
    console.log("num은 10과 같습니다.")
}
else{ // 조건이 거짓일 때 실행
    console.log("num은 10보다 작습니다.");
    console.log("조건이 거짓입니다.");
}

// switch if문과 기능 자체는 동일하나 다수의 조건을 처리할 때 if보다 직관적
let animal="snake";

        // 비교하고 싶은 변수 
switch(animal){
        // 변수 값의 후보
    case "cat":{
        console.log("고양이");
        // 일치하는 case 아래의 모든 코드 실행되는 것을 방지
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default:{
        console.log("알수없음");
    }
}
// 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶을 때 -> switch
// 복잡한 여러개의 조건을 이용하고 싶을 때 -> if-else

