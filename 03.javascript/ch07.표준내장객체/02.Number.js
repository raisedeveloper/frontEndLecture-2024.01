// Number 객체

let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); // 지수형
console.log(pi.toFixed(5));      // 유효숫자 5
console.log(pi.toPrecision(3));  // 유효숫자 3

console.log(Number.MAX_VALUE, Number.MIN_VALUE); // 표시 가능 최대, 최소
console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER); // 정수 표시 제한
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY); // 무한

console.log(Math.pow(2, 53) - 1); // MAX_SAFE_INTEGER
