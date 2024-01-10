// Number 객체


//나의 필기
/* let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); // 지수형
console.log(pi.toFixed(5));      // 유효숫자 5
console.log(pi.toPrecision(3));  // 유효숫자 3

console.log(Number.MAX_VALUE, Number.MIN_VALUE); // 표시 가능 최대, 최소
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // 정수 표시 제한
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY); // 무한

console.log(Math.pow(2, 53) - 1); // MAX_SAFE_INTEGER

 */


// Number 객체
//선생님 필기
let numberFromLiteral = 273;                    // 273과 같은 것을 literal
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        // 3.141592653589793e+0
console.log(pi.toFixed(5));             // 3.14159
console.log(pi.toPrecision(3));         // 3.14

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) - 1);       // Number.MAX_SAFE_INTEGER