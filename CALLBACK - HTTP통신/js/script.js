// 비동기, 동기
// 콜백 - 콜백 함수
/*
	promise
	ajax(http)
	디자인패턴
	promise 패턴
*/

// 자바스크립트 비동기 프로그래밍

//for ( var i = 0; i < 10; i++ ) {
//	setTimeout(function(){
//		console.log(i);
//	},10)
//}
//
//console.log('done');

// 비동기 -> 콜백함수 -> 콜백지옥, 콜백무덤

/*
function success(){
	console.log('done');
}

var number = function(i,callback){
	setTimeout(function(){
		console.log(i);
		if ( i >= 9 ) {
			callback();
		} else {
			number(i+1,success); // 재귀함수
		}
	},1000);
}

//number(0,success);

//동기 
var sync1 = function(num){
	return num*2;
}

var sync2 = function(num){
	return num*4;
}

var sync3 = function(num){
	return num*6;
}

console.log(sync3(sync2(sync1(1)))); // console.log(8);

var async1 = function(num,callback){
	callback(num*2)
}

var async2 = function(num,callback){
	callback(num*4)
}

var async3 = function(num,callback){
	callback(num*6)
}

async1(1,function(result){
	async2(result,function(result){
		async3(result,function(result){
			console.log(result);
		});
	});
});

*/

//Promise (resolve(success), reject(fail)) - ES6 
//Login검사 할 경우 promise 사용. Promise chain 

/*

function pm1(num) {
    return new Promise(function(resolve, reject){
        resolve(num*2); //parameter을 넘겨줘야지 pm2가 실행됨
    });
    
}

function pm2(num) {
       return new Promise(function(resolve, reject){
        resolve(num*4); //parameter을 넘겨줘야지 pm2가 실행됨
    });
}


function pm3(num) {
       return new Promise(function(resolve, reject){
        resolve(num*6); //parameter을 넘겨줘야지 pm2가 실행됨
    });
}

pm1(1)
    .then(pm2)
    .then(pm3)
    .then(function(result) {
    console.log(result);
});


function pm4(num) {
    return Promise.resolve(num*2);
}

function pm5(num) {
    return Promise.resolve(num*4);
}

function pm6(num) {
    return Promise.resolve(num*6);
}

pm4(1)
    .then(pm5)
    .then(pm6)
    .then(function(result) {
    console.log(result);
});


*/

//Ajax(Asynchronous Javascript and XML) - (HTTP 통신)
/*
    HTTP 1.1 
    프로토콜 -> 약속규약
        - 클라이언트와 서버에 이루어지는 요청/응담(request/response)

    Single Page Application을 만드는 이유는 멀트플랏폼으로 구현하기 위함. 예제) 푸시 
    HTTP Method
        - GET 조회기능 (SELECT)
        - POST 입력기능 (INSERT)
        - PUT 수정기능 (UPDATE)
        - DELETE 삭제기능 (DELETE)
    DB Method 
        - SELECT
        - INSERT
        - UPDATE
        - DELETE
        
        
    React로 요청하여 Node가 응답하게 만든다. 
    응답 코드 종류별로 있음.
        100 - 정보
        200 - 성공
        300 - 방향 바꿈
        400 - 클라이언트 오류
        500 - 서버 오류 
        
    HTTPS -> ID와 PWD는 암호화가되서 보내진다. 
    
    port --> 웹을 사용하는 문 65000
    ex) www.naver.com:8888, 192.168.0.1:8888

    프로토콜 포트 
    21 -> ftp (file transfer protocol)
    22 -> ssh (shell 및 서버 접속을 위함)
    24 -> personal mail
    80 -> http 
    443 -> https (SSL)
    3306 -> Database(mySQL)
    
*/

/* javascript vs jquery 바식
    - json viwer chrome plugin download
    - javascript vs jquery
    - http 통신

*/



// https//httpbin.org/get
// 동기 처리
// restAPI 통신 객체만
// json - 객체를 전달 표준 포맷, 브라우저/서버 통신(Ajax)를 위해, 넓게는 XML(AJAX가 사용)을 대체하는 주요 데이터 포맷
// restAPI front와 Backend를 연결하는 방식 
// 주로 백앤드가 restAPI로 만들면 프론트앤드가 ajax를 만든다
// Ajax - 자바스크립트를 통해서 서버에 데이터 요청 방식, 비동기적 - 먼저 요청한 함수가 먼저 실행되지 않음 즉 서버에 요청을 보내놓고 프로그램을 계속 돌아가는 방
//XML은 자바스크립트에서 사용하기 불편하기에 서버에 요청을 보낼때는 json을 많이 사용
//json은 자바스크립트 객체 또는 배열임. 
//재부도소년 백파크

/*
var xhr = new XMLHttpRequest(); //통신 객체를 넣는다. 

xhr.onreadystatechange = function() {
        console.log(xhr.readyState); 
        if (xhr.readyState == 4 && xhr.status == 200) { //readystate - 잘 보냈느지 잘 받았는지 확인. 받으면 번호 4가 나옴.
            console.log('start'); //통신이 성공했을 경우 start
            //console.log(JSON.parse(xhr.response)); //normal text > json으로 변경하여 객체 형태로 변환
            
            var result = JSON.parse(xhr.response);
            //console.log(result.url); // URL만 받음
            console.log(result.headers.Host);            
            document.getElementById('host').innerHTML = result.headers.Host;
        }
        
}

function exam(){
    xhr.open('GET', 'https://httpbin.org/get'); //접속할 방식과 주소 설정 정보
    xhr.send(); //보내기
}
exam();
console.log('end');
*/

//GraphQL - front가 데이터 요청
//RestApi - back이 데이터 요청
//백앤드 - Google에서 Firebase DB개념 - 해깅이라는 경고를 남겨줌

//jquery ajax
//ajax - 실시간 코멘트, 실시간 유저 변경

function result(data) {
        $('.result').text(data.headers.Host);
        
    }

$('.btn').on('click', function() {

$.ajax({
    type : 'GET',
    url : 'https://httpbin.org/get',
    dataType : 'JSON', 
    success : result,
    
    error : function(err) {
      console.log(err);  
    },
    
    beforeSend : function() {
        console.log('전송하기 전에 하고 싶은 기능');
    }
    
    });    
});

// http 통신할때 크로스도메인 개념 이해
// 서로 다른 주소의 상태일때 통신보호방식

//www.naver.com <=> www.daum.net (크로스도메인)
//www.naver.com:8888 <=> www.naver.com:7777
//CORS개념 - 어떤 IP만 접근하게 가능하다. 


//JS 디자인 패턴 
//Module 패턴
//singletone 패턴
//Observer 패턴
//Protoype 패턴
//promise 패턴



















