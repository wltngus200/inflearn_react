// 점표기법을 통해 객체 안의 값을 보여줌
            // proos 매개 변수
/*
const Button =(props)=>{
    console.log(props)
    return <button style={{color:props.color}}>{props.text}-{props.color.toUpperCase()}</button>
}
*/
// 객체가 들어오는 것을 알기 때문에 구조분해 할당을 사용
// HTML 태그를 Props로 전달
const Button =({text, color, children})=>{
    return <button style={{color:color}}>{text}-{color.toUpperCase()}-{children}</button>
}

// 오류가 발생하지 않도록 디폴트값 설정
Button.defaultProps={color:"black"}

// 내보내기 
export default Button;