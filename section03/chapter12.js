// 비동기 작업 처리 콜백함수

function add(a, b, callback){ // 이 함수를 비동기작업으로 만듦
    setTimeout(()=>{
        const sum=a+b;
        callback(sum);
    },3000);
}
        // 비동기 함수의 결과값을 사용하고자 하는 콜백함수
add(1,2, (value)=>{console.log(value)});
// 비동기 함수 결과값을 함수 외부에서 이용하고 싶을 때 콜백함수를 이용해 비동기함수 내에서 호출

// 음식 주문 상황
function orderFood(callback){
    setTimeout(()=>{
        const food="떡볶이";
        callback(food);
    }, 3000)
}

// 음식을 식힘
function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood=`식은 ${food}`;
        callback(cooldownedFood)
    },2000);
}

// 음식을 냉동
function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood=`냉동된 ${food}`;
        callback(freezedFood);
    }, 1500)
}

// 함수의 호출
orderFood((food)=>{
    console.log(food);
    // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달 -> 콜백지옥 유발
    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood)
        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        })
    });
});