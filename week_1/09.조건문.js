// 조건문 - if, else if, else, switch

// 1. if문
let x = 10;

// 1-1. if (true 또는 false가 나올수 있는 조건) {}
if (x > 0) {
    // main logic
    console.log("x는 양수입니다")
}

// 1-2
let y = "hello world"
if (y.length >= 5) {
    console.log(y.length)
}

// 2. if - else if -else 문

if (x > 0) {
    //main logic #1
    console.log("양수입니다.")
} else if (x == 0) { 
    // main logic #2
    console.log("0입니다.");
} else {
    // main logic #3
    console.log("음수입니다.");
}

// 3. switch
// 변수의 값에 따라, 여러 개의 경우 (case) 중 하나를 선택
// switch 문에서 case가 끝날때 항상! break 문을 넣어주기
// default
let fruit = "사과"

switch(fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}