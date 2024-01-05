// 타이머 내장 함수

setTimeout(function() {
  console.log('3초 경과');
}, 3000);                   //m/s 단위 (밀리세컨드라고 읽음)

cosnt si =setIterval(function() {    //인터벌 마다 실행을 함 
  console.log('new Date'());
}, 1000);                    //1초마다 (1000m/s) 

setTimeout(() => {
    console.log('5초 경과후 초시계 정지시킴');
    clearInterval(si);
}, 5100);
