console.log("안녕 Node.js");

/* Common JS(CJS)
// math모듈에서 내보내진 함수 활용 내장함수 require 함수가 현재 경로의 모듈로부터 내보내진 값 그대로 반환 
const moduleData = require("./math");
console.log(moduleData);
// 객체가 저장된 moduleData 내의 함수 호출
const sum=moduleData.add(1,2);
const min=moduleData.sub(2,1);
console.log(sum, min);

// 객체의 구조분해 할당
const{add, sub}=require("./math");
const sum1=add(1,2);
const min1=sub(2,1);
console.log(sum1, min1);
*/

/* ES Module(ESM) */
        // 가져오고자 하는 값 from 모듈 경로(확장자 필수!)
import {add, sub} from "./math.js";
console.log(add(1,2));
console.log(sub(2,1));

import{print} from "./math.js"
print("Node.js", "안녕");

// 디폴트 값 불러오기 -> 중괄호 X, 이름 변경 가능 (multiply)
import mul from "./math.js";
console.log(mul(1,5));

// 동일한 경로의 import문 합치는 것도 가능
import mul, {add, sub} from "./math.js";