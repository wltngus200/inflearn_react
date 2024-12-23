// css 적용 파일의 경로만 기술
import "./Main.css"

/*const Main=()=>{
    // 변수를 선언하고 랜더링 -> 중괄호 안에는 숫자 문자열로 평가되는 식 모두 사용 가능
    const number=9;
    const obj={a:1}; // 객체 출력시 오류

    return (
        <main>
        <h1>main</h1>
        <h2>{number%2===0?"짝수":"홀수"}</h2>
        {10}
        {number}
        {[1,2,3]}
        {true}
        {undefined}
        {null}
        {obj.a}
        </main>
    );
};
*/
// JSX UI 조건에 따라 각각 다른 UI를 랜더링
const Main=()=>{
    // 접속 사용자의 정보
    const user={
        name:"이정환",
        isLogin:true
    };
    // 방법 1
    // return <>
    //  {user.isLogin?<div>로그아웃</div>:<div>로그인</div>}
    // </>

    // 방법 2
    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }else{
        return <div>로그인</div>
    }
};


export default Main;
