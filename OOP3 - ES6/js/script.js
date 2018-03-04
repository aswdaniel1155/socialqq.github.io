//ES5 //var result = new sum1(100);

//ES6
//함수 -> 함수, 클래스 -> 클래스

/*function sum1(num) {
    return 100 + 100;
}
*/
//var result1 = (num) => num + num; //ES6
//var a = new result;
//consol.log(result(100));
// function과 return 워드를 생략해도 된다. 
// es6 class === es5 class

//ES class type
/*
function PolygonES5() {
    this.width = width;
    this.height = height;
}

PolygonES5.prototype.sumMethod = function() {
    return this.width * this.height;
}

var res1 = PolygonES5(20, 30);
console.log(res1.sumMethod());
*/

/*
class PolygonES6 {
    //클래스가 인스터스화를 시킬때 최초 실행되는 부분이다. 
    constructor(width, height) { //자동으로 실행된다.
        this.width = width;
        this.height = height;
    }
    
    //ES5 function sumMethod() {}}
    sumMethod(){
        return this.width * this.height;    
    }
    
    get area() { //확인하는 기능
        return this.sumMethod();
    }
    
    static distance() { //인스턴스화 시키는 것이 아닌 직접호출이 가능.
        console.log('a');
    }
    
}

var res2 = new PolygonES6(30, 40); //생성자
console.log(res2.sumMethod()); //결과르 만드는 기능
console.log(res2.area); //결과를 확인하는 기능

PolygonES6.distance();
*/

// 상속

class Animal {
    
    constructor(type){
        this.type = type;
    }
    
    speak() {
        console.log(this.type + '소리를 냅니다.');
    }
}

class Dog extends Animal { //상속을 받는다. 
    
    speak() {
        console.log(this.type + ' 멍멍하고 소리를 냅니다');
    }
    
    parent() {
        super.speak(); //super를 콜해서 부모 스피크를 찾는다.
    }
}

var dog = new Dog('개');

dog.speak();
dog.parent();

class Cat {
    
}

//절차시향방식과 객체지향방식