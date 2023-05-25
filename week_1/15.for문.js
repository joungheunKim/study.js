// for, while => ~동안 : 반복문

// for (초기값; 조건식; 증감식;) {}

// i라는 변수는 0부터 시작
// i라는 변수가 10에 도달할때 까지 계속
// i라는 변수는 한 사이클이 돌고 나면 + 1
for (let i = 0; i < 10; i++) {
    console.log("For문 돌아가는중 =>" + i);
}

// 배열과 for문은 짝꿍이다.
const arr = ["one", "two", "three", "four", "five"]
for (let i = 0; i < arr.length; i++){
    console.log(i);
    console.log(arr[i]);
}

for (let i = 0; i < 11; i++){
    if (i > 0){
        if (i % 2 === 0){
            // 나머지 연산자 % 사용, 2로 나누었을때 나머지가 0인것 (2의 배수)
            console.log(i + "는 2의 배수입니다.")
        }
    }    
}

//for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
    name : "Kim",
    age : 30,
    gender : "male"
};

// 객채['key']로 객채의 value에 접근가능
for (let key in person){
    console.log(key + ":" + person[key]);
};