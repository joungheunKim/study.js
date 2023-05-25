// 스코프(변수의 영향범위), 전역변수, 지역변수, 화살표함수
let x = 10;
// 전역변수

function print(){
    let y =20;
    // 지역변수
    
    console.log(y)
};

// 화살표 함수
// ES6 신 문법

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x,y) =>{
    return x + y
}

// 1-2. 한 줄로
let arrowFunc02 = (x, y) => x + y
// 중괄호 안에 줄이 한 줄일 경우만 가능

