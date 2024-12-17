// 라이브러리 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것 ex. date, math, graph
// 라이브러리를 활용하면 프로그램 만들 때 일일히 기능 구현의 필요 X -> 원하는 기능의 라이브러리르 설치해 모듈 시스템

// 구글에 npmjs 원하는 라이브러리 상세페이지에서 install 아래의 명령어를 통해 설치
// 터미널에 명령어를 입력하고 나면 package.js에 dependencies 추가

// node_modules 설치한 라이브러리가 실제 저장되는 곳
// package-lock.json 패키지가 사용하는 라이브러리의 버전 정보를 정확하게 저장 ^(version Range : 대략적인 범위 표시)

// node_modules와 package-lock.json이 지워져도 package.json의 정보로 재 설치
// npm install 또는 npm i

// Node.js 패키지를 압축해서 공유 및 업로드 시 node_modules는 포함 X
