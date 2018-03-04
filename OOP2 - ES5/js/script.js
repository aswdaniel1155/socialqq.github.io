// 객체지향 프로그래밍

/*

	OOP
	개발 방법론
	
	자바스크립트는 객체지향 프로그래밍 언어가 아니다.
	JAVA -> 객체지향 프로그래밍
	
	객체지향 처럼 사용을 하는거다. (프로토타입)
	
	객체지향 프로그래밍 처럼 하려면..
	
	1. 추상화
	2. 은폐성(캡슐화)
	3. 상속성
	4. 다형성
	5. 합성
	
	함수를 사용한다. ( 클래스, 메소드, 함수 ) -> es5
	ECMAScript 6 이후 클래스 문법이 나오기 시작했다.
	: 결국엔 함수다.

*/

'use strict'; // IE10 아래 버전에선 동작을 안한다.

// 객체

// 객체를 생성하는 2가지 방법
var obj1 = new Object();
var obj2 = { a : 10 };

obj1.a = 10;
obj1.b = 10;

//console.log(obj2.a);

var exam = {
	
	a : 10,
	b : '문자',
	c : function(){ return 20; },
	d : [ 10, '문자', function(){ return 20; } ]
}

//console.log(exam.c())
//console.log(exam.d[2]())

var foo = {
	a : function(){ console.log('foo 실행'); }
}

var bar = {
	a(){ console.log('bar 실행') },
}

//foo.a();
//bar.a();

// 객체지향 프로그래밍

// 객체지향 프로그래밍은 객체(실존한다)라는 기준으로 개발을 한다. 
// 하나의 객체가지고 표현을 해보자 (TV)

// 클래스 -> 인스턴스 -> 내장함수(메소드) -> 멤버변수(프로퍼티)

// 클래스 : 자료와 기능을 가지고 있는 하나의 큰틀 (붕어빵틀, 와플틀)
// 인스턴스 : 클래스를 통해서 나온 결과물 (붕어빵)
// 내장함수 : 클래스의 기능
// 멤버변수 : 클래스의 자료

// 클래스의 선언 (재활용)
// 클래스는 결국 함수를 사용한다. 기존 함수와의 차이는 함수를 시작할때 이름의 첫 알파벳을 대문자로 함으로써 클래스라는 방식으로 사용한다.

// 함수 선언 방식
function BoongMake(type){
	
	this.type = type; // 멤버변수(프로퍼티)
	this.price = function(price){ // 내장함수(메소드)
		console.log(this.type + '은 ' + price + '원 입니다.');
	}
}

var result1 = new BoongMake('팥'); // 인스턴스
var result2 = new BoongMake('슈크림'); // 인스턴스

//console.log(result1.type);
//console.log(result2.type);
//
//result1.price(500);
//result2.price(1000);

// 리터널(보이는대로) 선언방식 (클래스)
// 재사용이 불가 하다.
var Boong2 = {
	type : '팥',
	price : function(){ }
}

var Boong3 = {
	type : '슈크림',
	price : function(){ }
}

// 프로토타입 클래스 선언 ( 객체지향 프로그래밍 )

// 1. 추상화
// 실제로 존재한다는 가정하에 기능이나 자료들을 시각화 한다.

/*

	/ TV 클래스
	
	프로퍼티--------------------
	제조사 <- 은폐성
	인치 <- 초기화
	모델 <- 초기화
	
	기본(공통)메소드-------------
	전원켜기()
	전원끄기()
	채널()
	볼륨()
	/
	
	/ 3D TV 클래스 (상속 TV클래스)
	3D()
	/
	
	/ APP TV 클래스 (상속 TV클래스)
	APP()
	/
*/

// TV 클래스를 함수 선언 방식의 클래스 표현 

function TV(inch,model){
	
	// 프로퍼티
	var _company = '삼성'; // 은폐성(캡슐화)
	
	this.inch = inch;
	this.model = model;
	
	// 제조사 확인 기능 (getter, setter)
	this.getCompany = function(){ /*console.log(_company);*/ }
	this.setCompany = function(name){ 
		_company = name;
	}
	
	// 메소드
	this.powerOn = function(){ console.log('전원켜기') };
	this.powerOff = function(){ console.log('전원끄기') };
	this.channel = function(){ console.log('채널') };
	this.volume = function(){ console.log('볼륨') };
}

var item1 = new TV('50인치','50UHD');

//console.log(item1._company);

item1.setCompany('Samsung');
item1.getCompany();


// 상속
// 함수선언방식 클래스는 상속이 가능하지 않다.
// 프로토타입 선언방식 클래스

function TV2(inch,model){
	this.inch = inch;
	this.model = model;
}

TV2.prototype.powerOn = function(){ console.log('전원켜기'); }
TV2.prototype.powerOff = function(){ console.log('전원끄기'); }

var tv50 = new TV2('50인치','50UHD');
var tv80 = new TV2('80인치','80QHD');

tv50.powerOn();
//tv50.view3D();

function TV3D(){
	
}

TV3D.prototype = new TV2('49인치','49UHD-3D'); // 상속
TV3D.prototype.constructor = TV3D; // 이름
TV3D.prototype.view3D = function(){ console.log('3D'); };

var tv3d = new TV3D;

tv3d.powerOn();
tv3d.view3D();





