// 절차지향 방식의 기능구현
// 디자인패턴 -> 싱글톤
/*
	1. 추상성
	2. 은폐성
	3. 상속성
*/

// 가로정렬 절차지향

// 선언부(선택자)
var doc = document;
var poster = doc.querySelector('.poster').getElementsByTagName('img');
var horizontal = doc.getElementById('horizontal');
var vertical = doc.getElementById('vertical');
var random = doc.getElementById('random');
var grid = doc.getElementById('grid');

// 기능부
function horizontalFunc(){
	
	for ( var i = 0; i < poster.length; i++ ) { 
		poster[i].style.left = (i * 200) + 'px';
        poster[i].style.top = 0 + 'px';
	}
	
	/*poster[0].style.left = '0px';
	poster[1].style.left = '200px';
	poster[2].style.left = '400px';
	poster[3].style.left = '600px';
	poster[4].style.left = '800px';
	poster[5].style.left = '1000px';
	poster[6].style.left = '1200px';*/
}

function verticalFunc() {
//모든 포스터는 가로 영역 200 세로 영역 270을 벗어나지 않는다.
//그안에서 모든 포스터는 랜덤으로 위치한다.
}

function randomFunc() {
    for (var i =0; i < poster.length; i++) {
        
        var cardRandom = Math.floor(Math.random() * poster.length);
        
        var x = Math.floor(Math.random() * 200) + 1;
        var y = Math.floor(Math.random() * 270) + 1;
        console.log(cardRandom);
        
        poster[cardRandom].style.left = x + 'px';
        poster[cardRandom].style.top = y + 'px';
    }
}

function gridFunc() {
    // 1. 규칙을 찾는다.
    // 2. 3개씩 위치해야 한다.
    // 3. 0 1 2 3 4 5 6 7 8 
    // 4. 0 1 2 0 1 2 0 1 2 
    // 5. 10,000,000 숫자에 콤마 넣기위해 나머지 연산자가 필요
    
    // 0 1 2 3 4 5 6 7 8
    // 0 0 0 1 1 1 2 2 2 
    
for (var i =0; i < poster.length; i++) {
        
        var x = (i % 3) * 200;  //나머지를 구하는 방법
        var y = parseInt( i / 3) * 270;
    
        poster[i].style.left = x + 'px';
        poster[i].style.top = y + 'px';
    }
}






// 이벤트
horizontal.addEventListener('click',horizontalFunc);
vertical.addEventListener('click',verticalFunc);
random.addEventListener('click', randomFunc);
grid.addEventListener('click', gridFunc);




















