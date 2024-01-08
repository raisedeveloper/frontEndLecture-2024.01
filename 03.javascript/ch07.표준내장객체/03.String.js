// String 객체

/*
한글 표기법
1. 국가 표준 : EUC-KR, ANSI, MS-Windows - 2바이트 완성형, ㄱ~ㅎ, ㅏ~ㅣ, 가 - 힣
2. Web 표준 : UTF-8 - 초성 + 중성 + 종성 각 1바이트씩 총 3바이트, 기본적으로 사용함.

++ ASCII code 1바이트로 구성, 영문자, 숫자, 특수기호 등
*/


let hello = '안녕하세요?'; // 국가 표준 기준 11바이트, Web 표준 기준 16바이트

// 속성
console.log(hello.length)

// 메소드 (method)
console.log(hello[1], hello.charAt(1));// (인덱스)
console.log(hello + ' 여러분!', hello.concat(' 여러분!')); // 뒤에 붙이기
console.log(hello.indexOf('하')); // 2 (인덱스 찾기)
console.log('pineapple'.lastIndexOf('p')); // 6 (지정한 값이 마지막에 나올 때 인덱스)


// 문자열을 분리하여 배열을 반환
let fruits = '사과, 배, 감, 포도';
let fruitArray = fruits.split(", ");
console.log(fruitArray);

// 문자열 일부분
const today = new Date().toISOString();
console.log(today);
// 2024-01-08T02:06:00.249Z
// 날짜 추출: 2024-01-08
console.log(today.substring(0, 10)); // T의 인덱스까지 0~9까지 잘라옴
console.log(today.substring(0, today.indexOf('T')));
console.log(today.split('T'));[0];
//시간 추출 : 02:06:00
console.log(today.substring(11, 19));
console.log(today.substring(today.indexOf('T') + 1, today.indexOf('.')));
console.log(new Date().toLocaleDateString());       // 2024.1. 8. 오전 11:16:40

//YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);            // 4 --> '04, 23 --> '23'
}
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())}` +
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;

}

console.log(new Date());
console.log(myDateTime());       // 2024-01-08 11:24:12
console.log(myDateTime().substring(11));    // 두번째 인수를 생략하면 지정위치부터 끝까지


//  공백 제거
let space = '     Hello?    ';
console.log(space.trim(), space.trimEnd(), ':', space.trimStart());

// Method chain
console.log(space.trim().substring(0, 5).toUpperCase()); //method chaining _ HELLO만 남기고 자금, 대문자

// 문자열 변환
const sample = 'A quick brown fox jumps over the lazy dog.';
console.log(sample.replace('A', 'a'));
console.log(sample.replace('o', 'O'));

// !정규 표현식! 위키독스 ( 딥 러닝을 이용한 자연어 처리 입문 - 02 -05 정규 표현식 참조.)
// 특히 비밀번호 조건 확인에 주로 사용 (문자 여부, 숫자 여부 등)
// 모든 언어에 사용, 마스터 수준이 아니라 흉내만 낼 수 있는 수준도 괜찮음
// https://wikidocs.net/21703
// 유투브에 정규표현식 강의 들어보기 https://www.youtube.com/watch?v=t3M6toIflyQ

//console.log(sample.replace(/o/g, '0'));     //모든 o가0 으로 바뀜 _ /o/g 정규표현식  g: 글로벌하게 하라 _ 모든 o를 지칭해라
/* 
const str = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog - 5 - 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, '');          // 영문자와 공백만 남기고 모두 지움 / ^ _not의 의미
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g, ''); // 한글과 공백만 남기고 모두 지움
let num = str.replace(/[^0-9]/g, '');              // 숫자만 남기고 모두 지움
let spe = str.replace(/[^-=]/g, '');               // -,= 특수기호만 남기고 모두 지움

console.log(eng);
console.log(kor);
console.log(num);
console.log(spe);
 */
//문자열 찾기
console.log(hello.indexOf('안녕'));
let search = 'hello';
if (hello.indexOf(search) >= 0)
    console.log(`찾고 싶은 단어 ${search} 이/가 문장안에 있습니다.`);
else
    console.log(`찾고 싶은 단어 ${search} 이/가 문장안에 없습니다.`);


