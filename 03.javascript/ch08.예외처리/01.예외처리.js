// 에러가 발생하면 프로그램 실행이 중지 됨

/* error.error.error();


console.log('여기가 끝입니다.');
 */
//ReferenceError : 참조할 수 없다 error is not defined!!! 너 에러라는 놈 명시 안했잖아!@!!!! 그게 누군데!!!! ㄹ난 찾을수없어@@!@!!!!!!

// 예외처리 : ... ㄷ ㄷ ㄷ 알앗어.. 에러가 나도 뒤어꺼 진행하게 해주는 것이 있잖아....

try {
    error.error.error();        //에러가 발생할지도 모르는 코드를 try - catch 블록안에 작성함
} catch (e) {
    console.log(e.name);
    console.log(e.massage);
}

console.log('여기가 끝입니다.');