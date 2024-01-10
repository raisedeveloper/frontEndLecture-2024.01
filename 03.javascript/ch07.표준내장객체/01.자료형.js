// 기본 자료형 - privitive type
let number = 273.14;
let string = 'hello';
let boolean = true;
console.log(typeof (number), typeof (string), typeof (boolean));

// 객체 자료형 - 기본 자료형을 객체로 만들었음. Wrapper Class라고도 함
let numObj = new Number(273.14);
let strObj = new String('hello');
let booObj = new Boolean(true);
console.log(typeof (numObj), typeof (strObj), typeof (booObj));

console.log(number == numObj, number === numObj); // == 형태만 같으면 됨 1은 숫자 string number 든 true로 나온다 
                                                  // === 은 형태도 같고 속성도 같아야한다.
