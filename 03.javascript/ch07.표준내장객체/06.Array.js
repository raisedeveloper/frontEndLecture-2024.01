// Array 객체

//1. 배열 생성
let fruits = ['apple', 'babana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 2. 배열 속성
console.log(cars.length)

// 3. 배열 메소드 method
//3-1. concat()
let newFruits = fruits.concat('mango', 'orange');
console.log(fruits);
console.log(newFruits);

// 3-2. join()
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);  // (', ') 위의 코드와 연결을 할 때

// 3-3. pop()* //*은 자기 파괴적 메소드 method_self ditructive method 
console.log(cars.pop());        // 맨 뒤에 있느 요소를 끄집어 냄 (어레이에서 퇴출당한 모습)
console.log(cars);

//3-4. push _ 자기 파괴적 메소드
cars.push('Volkswagen'); cars.push('Hyundai');
console.log(cars);

// 3-5. reverse()* // 자기 파괴적 메소드
cars.reverse();
console.log(cars);

// 3-6. sort()*
let numbers = [34, 56, 12, 20, 64, 46, 72];

// 오름차순(Ascending order (사전순서대로))
numbers.sort();
cars.sort();
console.log(numbers);

// 내림차순 (Descending order 큰것에서 작은것)
numbers.sort(function (a, b) {
    return b - a;
});
cars.sort(function (a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
});
console.log(cars);

let person = [
    { name: 'James', age: 30, job: 'programer' },
    { name: 'maria', age: 24, job: 'student' },
    { name: 'brain', age: 27, job: 'teacher' }
];

// 이름의 알파벳 오른차순으로 정렬
person.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
// 나이의 내림차순으로 정렬
person.sort((a, b) => b.age - a.age);
console.log(person);

// 3-7. slice()
console.log(fruits.slice(0, 2));
console.log(fruits);


// 4. 응용
// 4-1. 문자열 뒤집기
let str = 'Hello, Javascript';
console.log(str.split('').reverse().join(''));

// 4-2. 어떤 문자열이 회문(palindrome)인가?
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));


//자주 쓰게 될 코드

