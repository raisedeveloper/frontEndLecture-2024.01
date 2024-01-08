// 기본 자료형 - privitive type
let number =273.14;
let string = 'hello';
let boolean = true;
console.log(typeof(number), typeof(string), typeof(boolean));

// 객체 자료형 - 기본 자료형을 객체로 만들었음. Wrapper Class라고도 함
let numObj = new Number(273.14);
let strObj = new String('hello');
let booObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(booObj));

console.log(number == numObj, number === numObj); // 값은 같지만 타입은 다르다
