//선언적 함수
function add(a, b) {        // a, b - 매갤변수, parameter, argument
    return a + b;           // 반환값
}
console.log(add(3, 4));
console.log(add(8, 9));

//익명(Anonymous) 함수
const anonymous = function (a, b) {
    return a + b;
}
console.log(anonymous(3, 4));
console.log(anonymous(8, 9));

//화살표 함수, 람다 함수
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(8, 9));
