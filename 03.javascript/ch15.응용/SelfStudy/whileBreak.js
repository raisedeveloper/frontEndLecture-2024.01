Scanner sc = new Scanner(System.in);
boolean flag = true;
while(flag) {
	System.out.println("메뉴 : 1. 더하기 2. 빼기 3. 종료");
	System.out.print("입력 : ");
	int input = sc.nextInt();
	switch(input) {
	case 1:
		System.out.println("더하기를 합니다.");
		break;
	case 2:
		System.out.println("뺴기를 합니다.");
		break;
	case 3:
		System.out.println("프로그램을 종료합니다.");
		flag = false;
		break;
    	default:
    		System.out.println("숫자를 다시 입력하세요.");
	}
}
sc.close();