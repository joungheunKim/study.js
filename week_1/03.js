//2. 문자 : string (문자열 = 문자의 나열)
// '' = " "
let str = "hi";
console.log(str);
console.log(typeof str);

// 2-1. 문자열 길이 확인
console.log(str.length);

// 2-2. 문자열 결합하기 (concatenation)
let str1 = "Hello,";
let str2 = "World";
let result = str1.concat(str2);
console.log(result); // Hello, World 

// 2-3 문자열 자르기
let str3 = "Hello, World";
console.log(str3.substr(7, 5)); // 시작위치부터 몇개까지 => World
console.log(str3.slice(7, 12)); // 시작위치부터 끝위치까지 => World

// 2-4. 문자열 검색
let str4 = "Hello, World";
console.log(str4.search("World")); // 글자가 시작하는 지점 찾기 => 7 

// 2-5. 문자열 대채
let str5 = "Hello, World";
let result01 = str5.replace("World", "Javascript") //World를 Javascript로 대채  =>Hello, Javascript 
console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); //apple, banana, kiwi 이런 문자열이 => [ 'apple', ' banana', ' kiwi' ] ,를 기준으로 분할되어 들어가 있다.
console.log(result02);