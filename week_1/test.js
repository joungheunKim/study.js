function solution(s) {
    var answer = true;
    // 1.대소문자의 통일
    s = s.toLowerCase();
    var num = 0;
    // 2. p 와 y 의 개수 체크
    for (i = 0; i < s.length; i++){
        if (s[i] === "p") num++;
        if (s[i] === "y") num--;
    }
    answer = (num === 0);

    return answer;
}

var str1 = "pPoooyY";
var str2 = "PyY";
console.log(solution(str2))


function solution(absolutes, signs) {
    // 1. return햐여하는 answer 생성
    var answer = 0;

    // 2. 두배열을 비교하며 양수면 + 음수면 -
    for (var i = 0; i < absolutes.length; i++) {
        // 부호(+, -)에 따른 처리
        if (signs[i] === true){
            //값이 true인 경우(양수)
            answer = answer + absolutes[i];
        } else if (signs[i] === false){
            // 값이 false인 경우 (음수)
            answer = answer - absolutes[i];
        }
    }
    return answer;
}

var absolutes = [4, 7, 12];
var signs = [true,false,true];

console.log(solution(absolutes, signs));


function solution(s){

      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }
