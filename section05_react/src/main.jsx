import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 리액트가 제공하는 내부 메소드
// createRoot는 인수로 전달 받은 html 요소를 루트로 만듦
createRoot(document.getElementById('root')).render(
  // render 메소드를 통해 루트 아래에 렌더링 -> App
  <StrictMode>
    {/* 컴포넌트를 렌더링하는 문법 -> ES Module 시스템으로 import시 jsx파일에서 HTML tag 들을 반환*/}
    <App />
  </StrictMode>,
)
