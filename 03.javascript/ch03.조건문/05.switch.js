/* 
let score = Math.ceil(Math.random() * 60) + 40; //41 ~ 100 사이의 정수라는 카테고리 (범주)를 만든 식
let grade = ''; // 빈 스트링을 만들어서 여기에 결과값(학점)이 입력되게 만듬 !! 꼭 이렇게 해야함!!

switch(parseInt(score / 10)) {
    case 10:
    case 9:
        grade = 'A'; break;      //switch 문을 벗어남
    case 8: 
        grade = 'B'; break;
    case 7: 
        grade = 'C'; break;
    case 6: 
        grade = 'D'; break;
        
    default:
        grade = 'F';

}
console.log(`점수: ${score}, 학점: ${grade}`); */

// 알람 45분 빨리 설정하기 : 계속 알람끄고 자는 습관때문에 미리 울리도록 맞춰두기 위함

/* let process = require("process");
let {stdin} = process;

stdin.on("readable", function scanf(){
    let stdinBuffer = stdin.read();
    let stdinNumbers= stdinBuffer.toString().split("");
    let [H, M] = stdinNumbers.map(input => {
        return parseInt(input);
    });

    M= M-45;

    if(M >= 0){
    }
    else if(H == 0) {
        H = 23;
        M = 60+M
    }

    else{
        H--;
        M = 60+M
    }
    console.log(`${H} ${M}`);
    stdin.removeListener("readable", scanf);
});

a=10
a-=1
9 */

/* let H = Math.ceil(Math.random() * 24 - 1);
let M = Math.ceil(Math.random() * 60 - 1); */

let H = 7;
let M = 20;

console.log(`${H} ${M}`);

if(M<45){
    M=60-45+M;
    H--;
}
else
    M-=45;

if(H==-1)
    H=23;

console.log(`${H} ${M}`);


//알람시계 해답
let hour = 6, minute = 30;
let newHour = 0, newMin = 0;

if(minute >= 45){
    newHour = hour;
    newMin = minute -45;
} else {
    if (hour == 0) {
    newHour = 23;
    newMin = minute + 60 - 45;
    } else {
    newHour = hour - 1;
    newMin = minute + 60 - 45;
    }
}
console.log(`${hour}시 ${minute}분 --> ${newHour}시 ${newMin}분`);


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
    