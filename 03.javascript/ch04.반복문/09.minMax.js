//어떤 배열에서 최소값, 최대값 구하기
//총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.
// 백준도장 <개수 세기 10807번 문제> https://www.acmicpc.net/problem/10807

//numbers 반복문 
// Math.max(numbers);  Math.min(), Math.max() 이렇게 해도 되지만 내가 직접 찾을 순 없을까? 이하 코드 참고하시오.
let numbers = [3, 56, 43, 25, 68, 19];
let minVal = 100, maxVal = 0;
for (let number of numbers) {
    //최소값
    if (number < minVal)
        minVal = number;
    //최대값
    if (number > maxVal)
        maxVal = number;
}
console.log(`최소값: ${minVal}, 최대값: ${maxVal}`);
//