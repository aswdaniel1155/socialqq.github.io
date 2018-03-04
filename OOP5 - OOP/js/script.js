// 객체지향 방식

// Prototype

function Selector() { //선택자 집합 클라스 - 선언문
    var doc = document;
    this.select = doc.querySelector('.poster').getElementsByTagName('img');
}

function PosterAlign(length) { //align 기능 - 기능문
    this.gridLength = length; //초기값으로 setting

}


PosterAlign.prototype = new Selector;
PosterAlign.prototype.constructor = PosterAlign; //상속하다.
PosterAlign.prototype.position = function(x, y, index) {
		this.select[index].style.left = x + 'px';
        this.select[index].style.top = y + 'px';
}

PosterAlign.prototype.horizontal = function () {

        for ( var i = 0; i < this.select.length; i++ ) { 
	       this.position((i*200), 0, i);
	}
}

PosterAlign.prototype.vertical = function () {

        for ( var i = 0; i < this.select.length; i++ ) { 
	       this.position(0, (i*270), i);
	}
}

PosterAlign.prototype.grid = function (number) {
    for ( var i = 0; i < this.select.length; i++ ) { 
        var x = (i%this.gridLength)*200;
        var y = parseInt(i/this.gridLength)*270;
        
        this.position(x, y, i);
	}
    
}

var number = 3;
var poster = new PosterAlign(number);
var doc = document;

doc.getElementById('number').value = number // 확장성

//Event
doc.getElementById('horizontal').addEventListener('click', function() {
    poster.horizontal();
});

doc.getElementById('vertical').addEventListener('click', function() {
    poster.vertical();
});

doc.getElementById('grid').addEventListener('click', function() {
    var count = doc.getElementById('number').value;
    poster.grid(count);
});

//console.log(poster.select); //상속이란 과정을 거쳐서 부모 선택자를 활용할 수 있음.