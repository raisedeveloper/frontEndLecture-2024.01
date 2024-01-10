// Number 객체
// 리터럴은 경찰제복, 군복 처럼 종류별 옷이 바로 리터럴임.
// 리터럴 기준에서 변수를 본다면 리터럴은 변수의 형(type)을 정하는 능력이 있음.
// 고정된 값을 대표한다는 의미는 변수의 형 (type)을 의미한다고 볼 수 있음.
// literal 종류 : 배열 리터럴, 불리언 리터럴, 숫자 리터럴, 부동 소수점 리터럴, 문자열 리터럴, 정규실 리터럴, 객체 리터럴
let numberFromLiteral = 273;                    // 273과 같은 것을 literal
let numberFromConstructor = new Number(273);
const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        // 3.141592653589793e+0   지수형
console.log(pi.toFixed(5));             // 3.14159                유효숫자 5
console.log(pi.toPrecision(3));         // 3.14                   유효숫자 3

console.log(Number.MAX_VALUE, Number.MIN_VALUE);                 // 표시 가능 최대, 최소
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);   // 정수 표시 제한
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY); //무한
console.log(Math.pow(2, 53) - 1);       // Number.MAX_SAFE_INTEGER