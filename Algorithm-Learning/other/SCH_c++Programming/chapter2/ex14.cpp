//// 커피종류 에스프레소, 아메리카노, 카푸치노 3가지, 2000원, 2300원, 2500원, 20000이상 가게문 닫음
//#include <iostream>
//#include <string>
//using namespace std;
//
//int main() {
//    string order;
//    int cnt, price, total = 0;
//    cout << "에스프레소 2000원, 아메리카노 2300원, 카푸치노 2500원입니다." << endl;
//    while (total < 20000) {
//        cout << "주문>> ";
//        cin >> order >> cnt;
//        if (order == "에스프레소")  price = 2000;
//        else if (order == "아메리카노") price = 2300;
//        else if (order == "카푸치노") price = 2500;
//        price *= cnt;
//        total += price;
//        cout << price << "원입니다. 맛있게드세요" << endl;
//    }
//    cout << "오늘 " << total << "원을 판매하여 카페를 닫습니다. 내일 봐요~~~" << endl;
//
//}

// char
/*
int main() {
	char menu[100];
	int num, total=0;

	cout << "에스프레소 2000원, 아메리카노 2300원, 카푸치노 2500원입니다.\n";

	while (true)
	{
		cout << "주문>>";
		cin >> menu >> num;

		if (strcmp(menu, "에스프레소") == 0)
		{
			cout << 2000 * num << "원입니다. 맛있게 드세요\n";
			total += 2000 * num;
		}
		else if (strcmp(menu, "아메리카노") == 0)
		{
			cout << 2300 * num << "원입니다. 맛있게 드세요\n";
			total += 2300 * num;
		}
		else if (strcmp(menu, "카푸치노") == 0)
		{
			cout << 2500 * num << "원입니다. 맛있게 드세요\n";
			total += 2500 * num;
		}
		else { }

		if (total >= 20000)
		{
			cout << "오늘 " << total << "원을 판매하여 카페를 닫습니다. 내일 봐요~~~";
			break;
		}
	}

	return 0;
}
*/