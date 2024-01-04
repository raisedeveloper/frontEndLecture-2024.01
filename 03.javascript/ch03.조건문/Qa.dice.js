// 2480문제 : <주사위 세개> 

/* if (A == B && B == C) prize << 10000 + A * 1000;
    else if (A == B || B == C) cout << 1000 + B * 100;
    else if (C == A) cout << 1000 + C * 100;
    else {
        if (A > B && A > C) cout << A * 100;
        else if (B > A && B > C) cout << B * 100;
        else cout << C * 100;
    }  */

    let dice1 = Math.ceil(Math.random()*6);     //1 ~ 6
    let dice2 = Math.ceil(Math.random()*6);     //1 ~ 6
    let dice3 = Math.ceil(Math.random()*6);     //1 ~ 6
    let prize = 0;

    if (dice1 == dice2 && dice2 ==dice3) {
        prize = 10000 * dicee1 * 1000;
    } else if (dice1 == dice2) {
        prize = 1000 * dicee1 * 100;
    } else if (dice2 == dice3) {
        prize = 1000 * dicee1 * 100;
    } else if (dice1 == dice3) {
        prize = 1000 * dicee1 * 100;
        // } else if (dice1 == dice3) {
        //  prize = 1000 + dice1 * 100;
        
        }else{
        let maxDice = dice1 > dice2 ? dice1 : dice2;
        maxDice = maxDice> dice3 ? maxDice : dice3; //이 두줄 대신에 밑에 한줄도 가능
        /* let maxDice = Math.max(dice1, dice2, dice3); */
        prize = maxDice * 100;
    }
console.log(`${dice1},${dice2},${dice3} --> ${prize}원`);

//Refactoring
if (dice1 == dice2 && dice2 ==dice3) {      //if (dice1 == dice2 == dice3)
    prize = 10000 * dicee1 * 1000;
} else if (dice1 == dice2 || dice1 == dice3) {
    prize = 1000 * dicee1 * 100;
} else if (dice2 == dice3) {
    prize = 1000 * dicee1 * 100;
}else{
    let maxDice = Math.max(dice1, dice2, dice3);
    prize = maxDice * 100;
}
console.log(`${dice1}, ${dice2}, ${dice3} --> ${prize}원`);