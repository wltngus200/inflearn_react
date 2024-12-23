import './App.css';
// 컴포넌트 분리 후 기본값 반환 및 임포트 -> vite로 만든 리액트 앱에서는 확장자 생략 가능
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
  // Header 컴포넌트 배치 -> 부모 자식 컴포넌트
}

export default App
