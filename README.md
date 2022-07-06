# Side Project :: 로그인 & 회원가입 풀스택 구현

## 프로젝트 소개

<p align="justify">
웹프로젝트에서 사용하기 위한 로그인 & 회원가입 기능의 Boiler Plate 구현
참조: inflean_John Ahn
</p>

## 기술 스택

<div align=center><h1>📚 STACKS</h1></div>
<div align=center>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <br>
</div>

## 프로젝트 실행

### boiler-plate

### `npm run dev` :: 서버및 클라이언트 동시 실행

### `npm run backend` :: 서버 실행

<br>

### boiler-plate/client

### `npm run start` :: 클라이언트 실행

<br>

## 구현기능

<br>
<img src="./readme/readme1.png">
<br>
<img src="./readme/readme2.png">
<br>

1. `서버 구축 데이터베이스 연동`
2. `회원가입 기능 구현` value작성 -> join -> mogodb 데이터 전송 (비밀번호 암호화)
3. `회원가입시 비밀번호 확인 기능` password와 Confirm password 다를시 alert
4. `로그인 기능 구현` 없는 이메일 혹은 다른 비밀번호 작성시 alert
5. `로그아웃 기능 구현` 로그인 상태가 아닐시 alert
6. `페이지 권한 부여` 유저상태가 로그인 인경우 loginpage, resgisterpage 접근 불가

---
