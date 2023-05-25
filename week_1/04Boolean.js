// 1.불리언(Boolean)
// true(참), fales(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool1);

// 2.undefind 정의되지않았다.
// un : not, define : 정의하다
let x;
console.log(x);

// 3.null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null 과 undefind는 다른것이다
let y = null;
console.log(y);

// 4.object(객체) : key-value pair
let person = {
//  key :(콜론) value 
    name : 'kim',
    age : 28,
    test : true
};
console.log(typeof person) //object 반환

//array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입 []사용
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];