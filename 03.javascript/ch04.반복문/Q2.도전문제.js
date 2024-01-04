// 1. 완전수(Perfect number)
// 자기 자신을 제외한 약수의 합과 자기자신이 같은 수
// 6= 1 + 2 + 3
// 28 = 1+ 2 + 4 + 7 + 14
// 10000 이하의 수 중에서 완전수 4개를 찾으세요. (1은 제외)
//약수구하는 식 참고 자기자신을 제외한 약수의 합

//안순현님 답
/* let result = [];
let sum = 0;
for (let i=1; i<10000; i++){ //체크해야할 수
    for (let k = 1; k < i; k++){ // 나누는 숫자
        if(i % k == 0){ // 약수인지 찾는거
            if (i==k) // 자기자신일 때 루프 벗어나기
                break;
            sum+=k; // 약수를 더하기
        }
    }
    if (sum == i) // 완전수 여부
        result.push(sum); // 결과에 완전수 추가
    sum = 0; // 약수 합 초기화
}
console.log(result); */ 

//강사님 답
for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let k = 1; k < i; k++) {       // 1에서부터 자기자신 전까지
        if (i % k == 0)                 // 약수의 합 구하기
            divSum += k;
    }
    if (i == divSum)   
        console.log(i);                 //이 부분이 완전수 구한 부분
}



//반복문 조건문 적당히 잘 쓰기
// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)

//안순현님 답
/* let answer =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
            c=1000-a-b;
            if (a+b+c== 1000){ // 다 더한 값이 1000인 경우만 사용
                if(a*a + b*b == c*c && a < b) // 피타고라스와 크기 비교
                    answer.push(a, b, c);
            }
    }
}
console.log(answer); */


//강사님 답     // a * a + b * b = c * c
for (let a = 1; a <= 332; a++) {              //a <= 1000 가능
    for (let b = a + 1; b <= 500; b++) {    //b <= 1000 가능
        c = 1000 - a - b;
        if (a * a + b * b == c * c) {
            console.log(a, b, c);
            process.exit(0);                //실행중인 프로그램(ctrl+alt+Tab)을 prcess라고 함_프로세스 종료 라는 뜻
        }
    }
}

//모든 경우의 수를 돌려서 답을 찾아내는 형식 / 방정식이 아니라는 뜻