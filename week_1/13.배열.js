// 배열

// 1. 생성
// 1-1. 기본 생성
// 객체는 나열이기에 index를 가지고있다.
// 배열도 index를 가지며 순서가 중요하다.
let fruits = ["사과", "바나나", "오렌지"];
// index 배열    0       1         2

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits.length);
console.log(number.length);

//2. 요소 접근 [index]로 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push
fruits.push("키위")
console.log(fruits); //[ '사과', '바나나', '오렌지', '키위' ] 키위가 추가됨

// 3-2. pop 배열의 마지막 요소가 없어짐
fruits.pop();
console.log(fruits); //[ '사과', '바나나', '오렌지' ] 배열의 마지막 키위가 없어짐

// 3-3. shift 배열의 첫번째 요소가 없어짐
fruits.shift()
console.log(fruits); //[ '바나나', '오렌지' ] 배열의 첫번째 요소 사과가 없어짐

// 3-4. unshift 배열의 맨앞의 첫번째 요소 추가
fruits.unshift("포도")
console.log(fruits) //[ '포도', '바나나', '오렌지' ] 배열의 첫번째에 포도가 생김

// 3-5. splice
fruits.splice(1,1,"망고");
// 1번요소에서 시작해 1개를 지우고, 그 자리에 "망고"를 추가
console.log(fruits); 
//[ '포도', '망고', '오렌지' ] 1번째요소인 바나나가 없어지고 망고가 생김

// 3-6. slice(숫자,숫자)
let slicedFruits = fruits.slice(0,2);
//                  0번째요소부터 2번째요소전까지 (0번째와 1번째)
console.log(slicedFruits);

