// 객체 key-value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체 생성 방법
// 1-1 . 기본적인 객체 생성 방법
let person = {
    name : "홍길동",
    age : 30,
    gender : "남자"
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자")
let person2 = new Person("홍길순", 20, "여자")

// 2. 접근하는 방법
console.log("1",person.name);
console.log("2",person.age);
console.log("3",person.gender);


// 3. 객체 메소드 (객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key()  : key를 가져오는 메소드
let keys = Object.keys(person);
console.log("keys =>", keys); // keys => [ 'name', 'age', 'gender' ]

// 3-2. values
let values = Object.values(person);
console.log("values =>",values); //values => [ '홍길동', 30, '남자' ]

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person)
console.log("entries =>", entries)
//entries => [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. assign
// 객체 복사
let newPerson = {};             //{}를 이용해 key값 : value 입력 으로 원하는 것만 바꿀 수 있다.
Object.assign(newPerson, person, {gender : "여자"});
console.log("newPerson =>", newPerson);

// 3-5 객체 비교
// 크기가 상당히 커요! => 메모리에 저장할 때 별도의 공간에 저장
let person3 = {
    name : "홍길동",
    age : 30,
    gender : "남자"
};
let person4 = {
    name : "홍길동",
    age : 30,
    gender : "남자"
};

console.log(person3 === person4) //false
// person3 별도에 대한 주소, person4 별도에 대한 주소를 가지기에 false

let str1 = "aa";
let str2 = "aa";
console.log(str1 === str2) // true
// 크기가 크지않아 직접 저장하여 true값이 나옴

// Json.stringify (JSOn에서 제공하는 stringify(문자열화 기능))
console.log(JSON.stringify(person3 )=== JSON.stringify(person4))
//문자열로만 비교하기에 true 값이 나온다

// 3-6. 객체 병합
let person5 = {
    name : "홍길동",
    age : 30,
};
let person6 = {
    name : "홍길동",
    gender : "남자"
};

// ... : spread operator (ES6에서 나온명령어 {}중괄호를 없에고 내용물을 표시해주는 명령어)
let perfectMan = {...person5, ...person6};
console.log(perfectMan)
//{ name: '홍길동', age: 30, gender: '남자' }