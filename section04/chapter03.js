// Node.js 사용하기

// 프로그래밍에서는 목적을 갖는 프로그램을 만들 때 프로젝트라는 특정목적을 갖는 프로그램 단위
// Node.js에서 프로젝트를 부르는 다른 이름 = 패키지 -> 자바스크립트 앱, 리엑트 앱, 라이브러리 모두 패키지 단위

// Node.js 패키지 > 패키지 내 자바스크립트 코드 작성 및 실행

// Node 패키지 생성 : 루트 폴더생성 > VSCODE로 열기 > ctrl+J로 터미널
// 새로운 패키지 생성 혹은 초기화 npm init 
    // 오류발생 https://hellcoding.tistory.com/entry/VSCode-%EC%98%A4%EB%A5%98-%EC%9D%B4-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%97%90%EC%84%9C-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%A0-%EC%88%98-%EC%97%86%EC%9C%BC%EB%AF%80%EB%A1%9C
// 패키지 이름 입력(괄호 안=디폴트 값) 엔터 누르면 기본값으로 설정됨
// 버전(배포할 때 사용) > 간단한 설명 > 메인으로 실행될 js파일 > 테스트커멘드 > git 리퍼지토리 > 키워드 > 작성자 > 라이센스
// 생성 완료되면 package.json이 생성


// 자바스크립트 파일을 Node.js로 실행
// 터미널에 node (실행시키고 싶은 js파일), 경로가 있을 경우 경로 명시
// 경로가 복잡해질 경우 패키지 스크립트 사용 package.json 파일의 script 항목 안의 매크로
// name값으로 실행 가능 -> npm run start

