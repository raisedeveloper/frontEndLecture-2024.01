//for - 반복문
//1에서 100까지 합 구하기
let sum = 0;
for(let i = 1; i <= 1000; i++) {
    sum +=i; //sum에다 i값을 더해준다
}
console.log(`1에서 1000까지 합은 ${sum}`);

// 1에서 1000까지 홀수 합 구하기, 프로그램이 2씩 증가시키도록 하면 됨
let oddsum = 0;
for(let i = 1; i <= 1000; i+= 2) {
    oddsum += i;
}
console.log(`1에서 1000까지 홀수의 합은 ${oddsum}`);

let evenSum = 0;
for(let i = 2; i <= 1000; i += 2) {
    evenSum += i;
}
console.log(`1에서 100까지 짝수의 합은 ${evenSum}`);

//1에서 10까지 곱 구하기
let product = 1;
for(let i = 1; i <= 10; i ++) {
    product *= i;
}
console.log(`1에서 10까지 곱은 ${product}`);

// array의 요소 출력
// element1, element2, ....
let fruits = ['사과', '감', '귤', '배']; //줄바꿈을 안하는 게 좋다
let fruitStr = '';                      //fruit String의 약자 (이하 처럼 하면 됨)
for (let fruit of fruits) {
    fruitStr += fruit + ', ';
}
console.log(fruitStr);