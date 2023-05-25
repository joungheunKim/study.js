// while


// while(조건){
//     메인로직
//     증감
// }

let i = 0;
while (i < 10){
    console.log(i);
    i++;
};

// 100보다 작은 5의 배수
while (i <100){
    if (i % 5 === 0 && i >= 5){
        console.log(i + "는 5의 배수입니다")
    };
    i++;
};

// do ~ while 문
let b =0;
do {
    console.log(b);
    b++;
} while (b < 10);

for (let c = 0; c < 10; c++){
    if (c === 5){
        break; // for문을 break한다. (break문을 만나면 for문을 stop한다.)
    }
    console.log(c); // 0, 1, 2, 3, 4
}

for (let c = 0; c < 10; c++){
    if (c === 5){
        continue; // 그 다음순서로 넘어간다 (여기서 5라는 값이 나오지 않고 넘어간다.)
    }
    console.log(c); // 0, 1, 2, 3, 4, 6, 7, 8, 9,
}
