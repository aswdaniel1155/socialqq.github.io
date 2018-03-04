//디자인 패턴 
/* 
Context: 어떤 사황에서 패턴이 사용되는가?
Problem: 무엇을 해결하려는가?
Solution : 이 패턴을 사용하면 제안된 문제를 어떻게 해결할 수있는가?
Implementation: 코드 구현은 어떻게 생겼는가?

*/

//모듈 패턴- 모듈은 클래스이며 캡슐화저이다.
//다른 클래스에서 액세스가 못하도록 보호됨. 
//Public 및 Private 접근 권한 설정이 가능함.
//IIFE(Immediately-Invoke-function-Expressions)
// 디자인 패턴
// GIT

// 디자인패턴
/*
	
	유지보수 , 구조화 되어진 코드
	협업
	재사용

*/

// 모듈패턴
// pubilc(공통) 와 private(보호)의 공간 분리 하기 위해서 사용한다.

var module = (function(){
	
	// private
	var data = 10;
	
	var test = function(){
		console.log(data);
	};
	
	return {
		// public
		number : 10,
		getData : function(){ 
			return data;
		},
		setData : function(){ 
			data += 10;
		},
		testFunc : function(){
			test();
		}
	}
})() // 자체호출

module.setData();
console.log(module.getData());

module.testFunc();


//싱글톤 - 하나의 객채를 활용해서 다같이 사용한다. 

var single = (function() {
    var instance;
    var data = 10;
    
    function init() {
        return {
            number : 10
        }
    }
    
    return {
        getInstance : function() {
            if (!instance) {
                instance = init();
            }
        }
        
    }
    
})()


var a = single.getInstance();
var b = single.getInstance();

console.log(a === b);


//프로토 타입 패턴 (생성자)
var pro = function() {
    this.number = 10; // this 개념 들어감
    
}

pro.prototype = {
    getNumber : function() {
        
    },
    setNumber = function() {
    
    },
    
}

var c = new pro; //new로 생성되면 서로 다르다. 
var d = new pro;

console.log(c.number);

