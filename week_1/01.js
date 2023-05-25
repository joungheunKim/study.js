// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. 변수.

// 변수의 5가지 주요 개념

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에  저장된값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것 

// 변수를 선언 할 수 있는 3가지 방법 var, let, const

 // var : 재선언 재할당 가능
 var person = "Kim"
 var person = "Juon"
 console.log(person) //"Juon"이 나옴

 // let : 재선언 불가, 재할당 가능
 let person1 = "Jin"
//  let person1 = "Gang"  재선언 불가
 person1 = "Chu" // 재할당 가능
 console.log(person1)

 // const : 재선언, 재할당 불가
 const person2 = "Ian"
//  const person2 = "Lip"  재선언 불가
//  person2 = "Gig"  재할당 불가
 console.log(person2)