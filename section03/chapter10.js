// Date 객체와 날짜

// Date 객체 생성 new 키워드와 함께 내장함수 호출
// new 키워드와 함께 새로운 객체를 생성 = 생성자
let date1=new Date(); // 파라미터로 아무 값도 전달하지 않으면 현재 시간
console.log(date1);

                // 날짜 표현 법 1997-01-07 1997.01.07 1997 01 07 1997/01/07
let date2=new Date("1997-01-07 10:10:10"); // 특정시간을 기준으로 생성
                            // 시간표시 -> 1997, 1, 7, 23, 59, 59와 같은 표기도 가능
console.log(date2);

                        // 협정 세계시 (UTC) : 세계 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
// 타임 스탬프 특정 시간이 1970년 01월 01일시 0시로부터 몇 ms가 지났는지를 표시하는 숫자값
let ts1=date1.getTime(); // 타임스탬프 반환
console.log(ts1);

let date4=new Date(ts1); // 새로운 date객체를 생성하는데 이용
console.log(date4);
// 복잡한 형태를 가진 시간 정보를 간단한 숫자로 표현

// 시간 요소(시, 분, 초) 추출
let year=date1.getFullYear();
let month=date1.getMonth()+1;
let date=date1.getDate();

let hour=date1.getHours();
let minute=date1.getMinutes();
let second=date1.getSeconds();

console.log(year, month, date, hour, minute, second);

// 객체 내 저장된 시간의 수정
date1.setFullYear(2025);
date1.setMonth(3); // 4월
date1.setDate(22);

date1.setHours(7);
date1.setMinutes(15);
date1.setSeconds(0);
console.log(date1);

// 시간을 여러 포멧으로 출력
console.log(date1.toDateString()); // 날짜만 출력
console.log(date1.toLocaleString()); // 현지화 포멧
