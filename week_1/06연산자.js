// 연산자( +, -, *, /, %)

// 1. 더하기 연산자 (+)
console.log(1 + 1); //2
console.log(1 + "1"); //11 + 연산자는 문자열에 우선순위가 있다.

// 2. 빼기 연산자 (-)
console.log(1 - "2"); //-1
console.log(1 - 2 ); //-1

// 3. 곱하기 연산자 (*)
console.log(2 * 3); //6
console.log("2" * 3); //6

// 4. 나누기 연산자 (/)
console.log(4 / 2); //2
console.log("4" / 2); //2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2); // 2.5
console.log(5 % 2); //1

// 6. 할당 연산자 (assigment)
// 6-1. 등호 연산자 (=)
let x = 10;
console.log(x);

// 6-2. 더하기 등호 연산자(+=)
x += 5; // x = x + 5
console.log(x);

// 6-3. 빼기 등호 연산자 (-=)
x -= 5;
console.log(x); // x = x -5

// 6-4. 곱하기 등호 연산자 (*=)
let a = 10;
a *= 2; // a = a * 2
console.log(a);

// 6-5. 나누기 등호 연산자 (/=)
let b = 10;
b /= 2; // b = n / 2
console.log(b);

// 비교 연산자( --> true 또는 false를 반환하는 연산자)

// 1. 일치 연산자 (===)
// 타입까지 일치해야 true를 반환하는 연산자
console.log (2 === 2); // true
console.log ("2" === 2); // false
console.log (2 === "2"); // false

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log (2 !== 2); // false
console.log ("2" !== 2); // true
console.log (2 !== "2"); // true

// 3. 작다(크다) 연산자 (<),(>)
console.log (2 < 3); // true
console.log (2 <= 3); // true
console.log (2 <= 3); // true
console.log (4 <= 3); // false

// 4. 논리 연산자
// 4-1. && (논리곱 연산자) : 모두 true일 때 true 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2. || (논리합 연산자) : 두 값 중 하나라도 true인 경우 true 반환
//      Shift + \키(enter키 위의 \키)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. ! (논리부정 연산자)
// : 값을 반대로 바꿈
let c = true;
console.log(!c); // false

// 5. 3항 연산자 (중요!) 항이 3개인 연산자
// 조건에 따라 값을 선택한다.
let q = 10;
let result = (q > 5) ? "크다" : "작다"
//              조건  ? true : false  .. true면 앞의 것 false면 뒤의 것
console.log(result)

// 3항연산자를 사용하여 y =20 일때 10보다 작은 경우 작다 10보다 크면 크다를 출력
let y = 20
let result1 = (y >10) ? "10보다 큽니다." : "10보다 작습니다."
console.log(result1)

// 6. 타입연산자 (typeof)
console.log (typeof "2") // typeof 다음의 타입을 출력한다 여기선 String