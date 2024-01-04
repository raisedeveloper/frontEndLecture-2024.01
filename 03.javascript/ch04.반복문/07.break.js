//break : 한단계 밖으로 탈출하는 것
/* let sum = 0;
while (sum <= 21) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    /*sum += dice;        //루프과금!!!! 조건을 변화시키는 실행문이 없으면 무한 루프에 빠짐, 탈출하려면 ctrl+c
} 
console.log(sum); */

// 위의 방법보다 아래 방법이 더 많이 사용됨
let sum = 0;
while (ture) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;
    if (sum > 21)
        break;
}
console.log(sum);

for (let i=0; i < 5; i++) {
    for (let k=0; k<5; k++) {
        if (k == 2)
            break;
    }
    console.log('point A');
}
console.log('point B');
//