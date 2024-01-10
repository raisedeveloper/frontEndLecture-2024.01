//사물을 표현할 때 속성 : 속성 _ 속성값들로 객체화 한다는 뜻임 / 함수 = 메소드 ; 형식은 같은데 말만 다르게 할 뿐임
//         - 동작 - method (객체 안에서 사용되는 함수) 

let obj = {
    //속성(attribute)
    name: '사과',
    price: 1000,

    //메소드(method)
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

console.log(obj.name, obj.price);
obj.print();