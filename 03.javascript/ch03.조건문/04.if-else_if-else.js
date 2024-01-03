// 점수에 따른 학점 구하기
// 90 ~ 100: A
// 80 ~ 80 : B
// 70 ~ 79 : C
// 60 ~ 69 : D
//    ~ 59 : F

// 카테고리를 나눠놓고 각각의 값을 도출하는 방법

let score = Math.ceil(Math.random() * 60) + 40; //41 ~ 100 사이의 정수라는 카테고리 (범주)를 만든 식
let grade = ''; // 빈 스트링을 만들어서 여기에 결과값(학점)이 입력되게 만듬

if (score >= 100)
    grade = 'A+';
else if (score >= 90) // 90점보다 크거나 같으면 A
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C'
else if (score >= 60)
    grade = 'D'
else if (score >= 50)
    grade = 'F'

    console.log(`점수: ${score}, 학점: ${grade}`)


 // FizzBuzz
if  (score % 35 == 0)                       %5    %7   == 0 이런 식으로도 만들 수 있음
    console.log('FizzBuzz');
else if (score % 5 == 0)
    console.log('Fizz');
else if (score % 7 == 0)
    console.log('Buzz');
else
    console.log(score);










