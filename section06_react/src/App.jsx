import './App.css';
// state 생성에는 리액트 제공 내장 함수 사용 -> 2개의 요소(state의 값, 함수)를 담은 배열 반환
import {useState} from "react";

// State
function App(){
  // 배열의 구조분해 할당(초기값, 상태변화 함수)
  const [count, setCount]=useState(0);
  const [light, setLight]=useState("OFF")
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={()=>{setLight(light==="ON"?"OFF":"ON")}}>{light==="ON"?"끄기":"켜기"}</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </div>
    </>
  );
}

export default App
