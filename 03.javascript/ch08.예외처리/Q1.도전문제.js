// 1. 만 나이를 계산하세요.
//생년, 월, 일을 변수로 설정해서 풀어보세요.

   let year = 1996;
   let month = 3;
   let day = 6;

   function age(a, b, c){
    let all = '';
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth()+1;
    let todayDay = new Date().getDay();
    let today = '';
    let age = 0;

    if (todayMonth>=b){
        if(todayDay>c)
            age = todayYear-a;
    }
    else    
        age = todayYear-a-1;
    return age;
}
   console.log(`저는 만나이로 ${age(year, month, day)}살 입니다.`);

//2. 백준도장 31090 참조
//다음의 사례에 대해서 Good/Bye를 출력하세요.
//2023, 2024, ..., 2040

//단, 조건에 맞는지를 확인해주는 함수 isDivisilble(year)을 만들어서 해결하세요.


function isDivisilble(year){
    if((year+1) % (year-2000) == 0)
    console.log(year, 'Good');

    else
        console.log(year, 'Bye')
}
for(let i = 2023; i <=2040; i++) 
        isDivisilble(i);


//3. array를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
//[24, 67, 45, 97, 43] 의 결과를 출력하세요. */

function answer(arr){
    let sum = 0;
    let sumSquare = 0;
    let squareSum =0;

    for(let number of arr){
        sum += number;
    }
    sumSquare = sum * sum;
    for (let number of arr){
        squareSum += number * number;
    }
    console.log(`더한값의 제곱은 ${sumSquare}`);
    console.log(`제곱한 것의 합은 ${squareSum}`);

    return sumSquare - squareSum;
}

let mainArray = [24, 67, 45, 97, 43];
console.log(`두 값의 차는 ${answer(mainArray)}입니다.`);


