// 연습문제
// 1. 1에서 1000 사이에 0은 몇번, 1은 몇번, ... 9는 몇번 사용되었는가?
// tip - 123456789..9991000

let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;

console.log(numStr);
// 1이 몇번?
for (let i = 0; i <= 9; i++) {
    let pattern = new RegExp('[^' + i + ']', 'g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}


// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);


// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?  29700~3d이 있으면 60을 곱한다.. 답 = 29,700초
let hourCount = 0; // 3이 포함된 시간
let minCount = 0;  // 3이 포함된 분

for (let i = 0; i < 24; i++) {
    i = String(i);       // i는 정수이기 때문에 split 하기 위해 문자열로 변경함     '11'
    i = i.split('');     // 문자열로 변환된 i를 한 자리수씩 잘라서 배열로 저장      ['1', '1']
    for (let k = 0; k < i.length; k++) {    // 반복횟수는 배열의 길이만큼
        if ((i[k]) == 3)              // 각 배열의 인덱스 값이 3과 같은지 확인
            hourCount++;
    }
    i = Number(i.join(''));
}

for (let i = 0; i < 60; i++) {
    i = String(i);
    i = i.split('');
    for (let k = 0; k < i.length; k++) {
        if (Number(i[k]) == Number(i[k + 1]) && Number(i[k]) == 3) {
            minCount++;
            break;
        }
        if (Number(i[k]) == 3)
            minCount++;
    }
    i = Number(i.join(''));
}

let result = hourCount * 3600 + (24 - hourCount) * minCount * 60;
console.log(result);

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome_회문_대칭수일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?  답 = 

function isPalindrome(str) {
    str = String(str);
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

let all = [];
let max = 0;
let num1 = 100, num2 = 100;
for (let i = 100; i <= 999; i++) {
    for (let k = 100; k <= 999; k++) {
        let palindrome = i * k;
        if (isPalindrome(palindrome) == true)
            all.push(Number(palindrome));
    }
    for (let num of all) {
        if (num > max)
            max = num;
    }
    if (max % i == 0) {             //약수 구하는 식 (이하 4줄)
        num1 = i;
        num2 = max / i;
    }
}
console.log(`가장 큰 Palindrome는 ${max}이고, 이는 ${num1}, ${num2}입니다.`);


//4. C:/workspace/frontEndLecture-2024.01/03.javascript/ch07.표준내장객체/04.String연습.js
//에서 파일명(04.String연습.js)만 출력하세요. 답 = 
let file = "C:/workspace/frontEndLecture-2024.01/03.javascript/ch07.표준내장객체/04.String연습.js";
console.log(file.substring(file.indexOf('연') - 9));