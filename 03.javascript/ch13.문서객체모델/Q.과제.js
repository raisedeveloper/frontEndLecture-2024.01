function square() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if (num1 < 1 || num1 > 20) {
        alert('첫번째 값은 1과 20사이로 지정해주세요.');
        document.getElementById('num1').value = '';
        return;
    }
    if (num2 < 10 || num2 > 30) {
        alert('두번째 값은 10과 30사이로 지정해주세요');
        document.getElementById('num2').value = '';
        return;
    }
    if (num1 + 4 > num2 || num1 > num2) {
        alert('두 정수의 차이는 4이상 나야 하고, 두번째 입력값이 더 커야 합니다.');
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        return;
    }
    let squareArray = [];
    let answer = 1;
    for (let i = num1; i <= num2; i++) {
        for (let k = 1; k <= i; k++) {
            answer *= 2;
        }
        squareArray.push(`2의 ${i}승 : ${answer} <br> `);
        answer = 1;
    }
    document.getElementById('result').innerHTML = squareArray;
}
//===================================================================================================
function checkWords() {
    let found = "the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.";
    let theFound = found.replace(/[^the ' ']/g, '');
    theFound = theFound.split(' ');
    let count = 0;

    for (let the of theFound) {
        if (the == 'the')
            count++;
    }
    document.getElementById('result').innerHTML = '"the"라는 단어는 총 ' + count + '번 나왔습니다.';
}

//===================================================================================================
function descendingNumber() {
    let num = document.getElementById('num').value;
    let numArray = num.split(';');
    numArray.sort((a, b) => b - a);
    document.getElementById('result').innerHTML = numArray.join(', ');
}