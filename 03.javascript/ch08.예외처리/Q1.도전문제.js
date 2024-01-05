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
for(let i = 2023; i <=2040; i++) //첫페이지는 2023페이지고 i가 2040페이지까지 보거나 더 보면 멈출건데 다만, 책을 한장씩 넘기겠다.
        isDivisilble(i);        // 책 내용에는 isDivisilble이게 써있고 i 지금 페이지 수의 값을 매개변수(=괄호)안에 넣겠다. / 페이지가 올라갈 때마다 i도 같이 올라가면서 계산을 때린다. 2040페이지가 될 때까지!


//3. array를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
//[24, 67, 45, 97, 43] 의 결과를 출력하세요. */

function answer(arr){ //array = 배열 /함수: function 인데 여기서 저 펑션을 썻다는 의미는 함수를 만들거라고 선언을 한거다 그 함수의 이름은 answer야
    // 그 앤서는 arr ['()'=매개변수를 받는 칸!! ]이라는 매개변수를 받을거야 _첫줄의 의미 끝 //변수 = 바뀔 수 있는 값
    let sum = 0;  //이름이 계속 바뀌니까 변수라고 한다 sum sumSquare ...등등  ** 매개체로 쓰는데 변하는 값을 매개변수라고 함 answer랑 외부에서 들어오는 변수를 이어주는 다리역할이 '() 매개체' 괄호다.
    let sumSquare = 0; //let : let은 유형의 역할 _ 자료형 : 자동차인지 사람인지 구분해주는 유형임 
    let squareSum =0;

    for(let number of arr){ // for = method 함수라는 뜻 / 셀 수 있을 때는 for , 셀 수 없으면 while
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


