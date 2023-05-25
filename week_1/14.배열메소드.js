//forEach, map, filter, find

let numbers = [4, 2, 5, 1, 3];

// 1. forEach
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item){
    console.log('item입니다 =>'+ item);
});

// 2. map : 항상 원본 배열의 길이만큼 return된다
//기존에 있는 배열을 가공해 새로운 배열을 만드는 것
// 그렇기에 return이 필수! , 새배열을 받을 변수도 있어야함
let newNumbers = numbers.map(function(item){
    return item * 2 ;
  //return 이없다면  [ undefined, undefined, undefined, undefined, undefined ] 배열의 길이만큼 undefined로 나옴
});
console.log(newNumbers); //[ 8, 4, 10, 2, 6 ]

//3. filter : 조건에 맞는 것만 return 한다.
// map과 마찬가지로 return 과 새배열을 받을 변수 필수!
let filterNumbers = numbers.filter(function(item){
    return item  > 2; 
});
console.log(filterNumbers); //[ 4, 5, 3 ]

//4. find : 조건에 맞는 0번째값만 return 한다
let result = numbers.find(function(item){
    return item > 2;
});
console.log(result) // 4 만 return 한다