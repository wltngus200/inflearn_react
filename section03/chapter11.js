// 동기와 비동기 하나의 일을 처리한 후 순서대로 다음 일을 처리 = 동기 -> 작업시간이 긴 경우 전체 프로그램 성능이 악화
    // 쓰레드 : 작업을 직접 실행하고 처리해주는 역할을 함 자바스크립트는 싱글 스레드 <-> 자바, C는 멀티스레드
    // 싱글 스레드의 단점을 보완하기 위한 처리방식 = 비동기 각 작업의 결과값을 이용하고 싶은 경우 콜백함수

console.log(1);
        // 콜백함수, ms 
setTimeout(()=>{console.log(2);}, 3000); // 특정 시간 이후에 실행 시켜 비동기적으로 작업을 처리하게 하는 내장 함수 
console.log(3);
// 싱글스레드지만 여러 함수를 처리할 수 있는 것은 비동기 작업은 Web APIs~브라우저가 관리하는 별도의 공간~에서 실행되기 때문(자바스크립트 엔진 X)
    // 자바스크립트가 비동기함수를 만나면 Web APIs에게 실행을 이관(타이머와 콜백함수), 타이머가 끝나면 Web APIs는 콜백함수를 자바스크립트 엔진에게 돌려주고 엔진은 실행

