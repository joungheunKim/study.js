// 조건부 실행

// and조건(&&)
let x = 10;
x > 0 && console.log("x는 양수입니다.");
// 아래와 같다
// if (x > 0) {
//     console.log("x는 양수입니다.");
// };

// or조건(||)
// 삼항 연산자와 단축평가
let y ; //y에는 undefind
let z = y ||20;
//  z값은 y가 ||(undefind 존재하지않으면) 이면 20을 기본값으로 설정
console.log(z);