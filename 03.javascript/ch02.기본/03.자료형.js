//wkqktmzmflqxmdml wkfygud
//1.Number
console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2);     // +,-,*, /
console.log(5 % 2);         // modulo, 나머지
console.log(2 ** 10);       //2의 10제곱, 1024(1K라고함)
console.log(1.3e-8);        // 1.3 X 10 ** -8 e=echo(에코)

//2. 문자열(string)
console.log('he said "I love you."'); // '문자열' 안쪽에 있는 것은 부호가 됨
console.log("I'll be back.");
console.log("he said \"I love you.\"");     //escaping
console.log('Back slash(\\) 기호를 사용할 때에는 \\ 두개를 쓰면 됩니다.');

let hello = '안녕하세요?';
console.log(hello[0], hello[2], hello[5]);      //안 하 ?

// template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '은', 2 + 3, '입니다');
console.log(`${a} 더하기 ${b}은 ${a + b} 입니다.`);
console.log(`올해는 ${new Date().getFullYear()}년입니다.`);

//full year
//java : fullYear : camel case --> Getter method -->
//python : full_year : snake case


// 3.논리형(boolean)
console.log(typeof (true), typeof (false));
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사'));       //관계 연산자

let x = 10;
console.log(x > 8 || x < -3);       // || or 논리연산자 || , x > 8 또는 x < -3
console.log(x > 8 && x < 12);       // && (and), 8 < x < 12
console.log(true > 10);