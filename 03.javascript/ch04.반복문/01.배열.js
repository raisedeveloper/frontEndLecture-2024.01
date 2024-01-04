//배열(Array)
let person = ['James' , 27, '남자', '프로그래머', 175.3]; //스트링 넘버 관계없이 들어감
console.log(person);
console.log(typeof person);     //object, array는 object의 한 형태
console.log(person.length);
console.log(person[0], person[1], person[person.length-1]);

// 배열을 효율적으로 사용하려면 반복문을 사용해야 함
// while 반복문 - 횟수가 정해지지 않은 경우 씀 
// for - 횟수가 정해져 있을 경우 씀

for (let i=0; i < person.length; i++) {  //외울 것 : 시작값; 조건이 참인 동안 반복; 다음번 반복시 변화시킬 값 / 시작하는 인덱스는 0, for는 사용할 횟수의 초기값을 씀
    console.log(person[i]);
} 
for (let i=person.length-1; i >= 0; i--){
    console.log(person[i]);
    }

// Enhanced for-loop
console.log(`Enhanced for-loop`);
for (let item of person)
console.log(item);

