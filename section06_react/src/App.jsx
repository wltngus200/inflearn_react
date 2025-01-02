import './App.css';
// 컴포넌트 분리 후 기본값 반환 및 임포트 -> vite로 만든 리액트 앱에서는 확장자 생략 가능
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  const buttonProps={
    text:"메일",
    color:"red",
    a:1,
    b:2,
    c:3
  }
  return (
    <>
      {/* props가 많을 경우 하나의 객체로 묶어 전달 -> 스프레드 연산자 */}
        <Button {...buttonProps}/>
        <Button text={"카페"}>
          <Header/>
        </Button>
        <Button text={"블로그"}>
          {/* props는 자바스크립트 값뿐만 아니라 HTML 요소, React 컴포넌트 전달 가능 */}
          <div>자식 요소</div>
        </Button>
    </>
  )
  // Header 컴포넌트 배치 -> 부모 자식 컴포넌트
}

export default App
