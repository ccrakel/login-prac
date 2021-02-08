# login-prac
Node.js로 로그인 화면 만들어보는 연습  

## 학습 일지 및 메모

## 2021 01 25
login-prac 프로젝트 생성  
개발환경 세팅  
http로 서버 구동해보기  
express로 서버 구동해보기   

## 2021 01 26
로그인 페이지 html  
로그인 뷰 최적화  
MVC V 분리  

## 2021 01 27
라우팅 분리  
컨트롤러 분리  
app.listen() 모듈화  
package.json 수정 - npm start  

## 2021 01 28
Git에 프로젝트 업로드  
폴더 구조 최적화 (app안에 bin(실행), src(소스))  
nodemon (sudo npm install nodemon -g)으로 서버 구동  
=> 파일 수정시 자동으로 서버 재시작  

## 2021 01 31
로그인페이지 DOM이용하여 HTML 객체 저장
로그인 요청하는 fetch 생성

## 2021 02 01
로그인 인증기능 (받은 데이터 == 객체)
UserStorage모델 구현
User모델 구현

## 2021 02 02
로그인 화면 꾸미기 (html, css)

## 2021 02 03
회원가입 페이지 구현
회원가입 라우팅 & 기능구현
파일시스템을 DB로 이용해서 로그인 구현
async, await은 try catch로 오류처리
fs모듈을 통한 회원가입 기능 구현
서버 API 테스트 도구 -> Postman & curl

## 2021 02 04
네이버 클라우드 서버 대여

ssh -l root -p 22 ip

## 3주차
### Node.js 설치
curl -sL https://deb.nodesource.com/setup_원하는.버전| sudo -E bash -
sudo apt-get install -y nodejs

### MySQL 설치
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
sudo mysql_secure_installation

password로 접근
mysql -u root -p

우분투에 node, mysql 구축
https://ppost.tistory.com/entry/%EC%9A%B0%EB%B6%84%ED%88%AC-1804%EC%97%90-%EC%84%9C%EB%B2%84%ED%99%98%EA%B2%BD-nodemysql%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

vscode ssh 연결
express generator

## 4주차
Naver Cloud Platform을 서버로 연결
fs로 구현 -> db기반으로 모두 변경


