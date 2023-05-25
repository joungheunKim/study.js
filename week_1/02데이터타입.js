//데이터 타입
// runtime : run 하는 time
//코드를 작성할 떄가 아니라, 실제 코드가 실행될 때
// -> 옆에 터미널에 코드가 실행될 때
// 그때, 데이터 타입이 결정된다.

// java :String a = "asd" java는 데이터 타입을 지정해줘야하지만
// javascript는 그렇지 않다 ex) const a = "asd"

// 1. 숫자
//1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1);

//1-2. 실수 (float)
let num2 = 3.14
console.log(num2);
console.log(typeof num2);

//1-3. 지수형(Exp)
let num3 = 1.5e5; // 1.5 X 10^5
console.log(num3);
console.log(typeof num3);

// 1-4. NaN : Not a Number
// 숫자가 아닌 값을 나타내는 것
let num4 = "hi" / 2;
console.log(num4);

// 1-5. 무한대(Infinity)
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

// 1-5. 무한대(Infinity)
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);