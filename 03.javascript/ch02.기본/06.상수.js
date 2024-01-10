// 상수 (Constant)
const a = 'Hello';
console.log(a);
//a += 'world';     //실행하면 runtime error 발생

const obj = { x: 1, y: 2 };
// obj = {x: 1, y:2, z: 3};     //error
obj.x = 10;
obj.y = 20;
console.log(obj); 