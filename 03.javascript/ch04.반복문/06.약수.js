//12의 약수를 구하는 방법 12의 약수 : 1.2.3.4.6.12 1-12까지의 숫자룰 모듈로(modul) 연산을 해서 0이 나오면 약수임.
let number = 12;
let index = 1;

while(index <= number){
    if (number % index == 0){
        console.log(index);
    }
    index += 1;
}

//강사님 답

let num = 12;
let divisors = [];
for (let i = 1; i <=num; i++) {
    if (num % i == 0)
        divisors.push(i);
}
console.log(divisors);

//두 수의 공약수 구하기     //great common divisor 최대 공약수 GCD
let num1 = 24, num2 = 60;
let commonDivisors = [];
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i == 0 && num2 % i == 0)
    commonDivisors.push(i);
}
console.log(`${num1}, ${num2}의 공약수는 ${commonDivisors}`)


