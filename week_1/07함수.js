// 함수 = funcfion (기능)
// input, output 가지고있는 기능의 단위
// function () {}

// 1. 함수 선언문
// function 함수이름(매개변수(input)) {
//    함수 내부에서 실행할 로직}

// ex) 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
    return x + y;
};

// 2. 함수 표현식
let add2 = function(x, y) {
    return x + y;
};

// 함수를 호출한다 (= 사용한다)
// 함수명 () => add(입력값)
console.log(add(2, 3))

// 변수명을 선언후 = 함수 호출
let functionResult = add(3, 4);
console.log(functionResult)

// input    : 함수의 input -> 매개변수 (매개체가 되는 변수)
// output   : return문 뒤에 오는 값 : 반환값