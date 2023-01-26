# 웹팩 설치하기

```
$ npm init
$ npm i react react-dom // 리엑트 설치

$ npm i -D webpack webpack-cli // 개발 환경에 웹팩 설치
```

# 웹팩 빌드

```
1. webpack.config.js를 정의

$ webpack

error
$ : command not found webpack
(solution)
1. 명령어로 정의 or packge.json의 script에 정의
- "dev" : webpack, -> npm run dev시 실행
2. npx webpack로 실행

error
$: ERROR in ./client.jsx 5:16
Module parse failed: Unexpected token (5:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const WordRelay = require('./WordRelay');
|
> ReactDom.render(<WordRelay />, document.querySelector('#root'));
|

wordrelay-setting (webpack 5.75.0) compiled with 1 error in 114 ms
(solution)
1. jsx를 읽지 못하여 발생 추가 적으로 babel을 셋팅해줘야 한다.

@@ babel
    "@babel/core": "^7.20.12", // 기본적인 바벨 _ 최신문법으로 바꿔주는 기능
    "@babel/preset-env": "^7.20.2", // 환경에 맞게 바꿔주는 기능
    "@babel/preset-react": "^7.18.6", // jsx 바꿔주는기능
    "babel-loader": "^9.1.2", // webpack와 연결해주는 기능
```
