//배열에 대한 함수 만들어 보기

// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수
function maxArray(arr) {
    let maxValue = arr[0];
    for (let item of arr) {
        if (item > maxValue);
        maxValue = item;
    }
    return maxValue;
}

let sampleArray = [43, 17, 25, 36, 98, 73];
console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));

// 3. 배열에서 제곱의 합 구하기
function sumOfSquare(arr) {
    let sumOfSquare = 0;
    for (let i = 0; i < arr.length; i++)
        sumOfSquare += arr[i] * arr[i];
    return sumOfSquare;
}
console.log(sumOfSquare(sampleArray));
