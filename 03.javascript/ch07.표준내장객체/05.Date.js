//Date 객체

//1. 현재 날짜/시간
let today = new Date();
console.log(today);                     // 2024-01-08T04:48:41.750Z, Timezone 미반영
console.log(today.toISOString());       // 2024-01-08T04:48:41.750Z
console.log(today.toLocaleString());    // 2024. 1. 8. 오후 1:48:41, Timezone 반영

//YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);            // 4 --> '04, 23 --> '23'
}
function myDateTime() {
    let now = new Date(); 
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())}` + 
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;

}
console.log(myDateTime(today));

// 2. 임의 날짜/시간
let yesterday = new Date('2024-01-07 14:00:00');
let tomorrow = new Date('Jan 9 2024');
let nextSunday = new Date('01/14/24');
console.log(myDateTime(nextSunday));


// 3. Unix time (1970-01-01 00: 00: 00 이후 ms 단위)
let unixDay = new Date(1.70469e12); //e 1.70469 X 10^12 (10의 12제곱 : 10을 12번 곱한것)
console.log(myDateTime(unixDay));      // 2024-01-08 14:00:00
console.log(new Date('2024-01-08 14:00:00').getTime());


// 4. 시간 연산
// 더하기, 빼기 (플마)
let date = new Date 
date.setDate(date.getDate() + 100);     //오늘부터 100일 후
console.log(myDateTime(date));
date.setDate(date.getDate() - 100);     //오늘부터 100일 전
console.log(myDateTime(date));

date.setMonth(date.getMonth() + 6);           // 6개월 후
date.setFullYear(date.getFullYear() + 1);     // 1년 후
console.log(myDateTime(date));

// 시간 간격
let gradDay = new Date('2024-06-13 17:30');
let diffMs = gradDay.getTime() - new Date().getTime();
let diffDay = (diffMs / (1000* 60 * 60 * 24));
console.log(diffDay);