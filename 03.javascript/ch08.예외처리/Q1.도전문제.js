// 1. 만 나이를 계산하세요.
//생년, 월, 일을 변수로 설정해서 풀어보세요.

   let year = 1996;
   let month = 3;
   let day = 6;

   function age(a, b, c){
    let all = '';
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth()+1;
    let todayDay = new Date().getDay();
    let today = '';
    let age = 0;

    if (todayMonth>=b){
        if(todayDay>c)
            age = todayYear-a;
    }
    else    
        age = todayYear-a-1;
    return age;
}
   console.log(`저는 만나이로 ${age(year, month, day)}살 입니다.`);






