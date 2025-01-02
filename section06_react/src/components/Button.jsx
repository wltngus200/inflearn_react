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
    // 이벤트 핸들러에서 설정될 함수가 길 경우
    // 이벤트 객체 리액트에서 발생하는 모든 이벤트는 이벤트 핸들러 함수를 호출하며 매개변수로 이벤트 객체 제공
    const onClickButton=(e)=>{ // e : 합성 이벤트 객체 
        console.log(e);
        console.log(text);
    }
    return <button 
    // 이벤트 핸들러
    // onClick={()=>{console.log(text)}}
    onClick={onClickButton} // 함수의 결과를 전달 X 함수 자체를 전달
    // onMouseEnter={onClickButton} // 마우스를 올렸을 경우 발생
    style={{color:color}}>{text}-{color.toUpperCase()}-{children}</button>
}

// 오류가 발생하지 않도록 디폴트값 설정
Button.defaultProps={color:"black"}


// 내보내기 
export default Button;