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