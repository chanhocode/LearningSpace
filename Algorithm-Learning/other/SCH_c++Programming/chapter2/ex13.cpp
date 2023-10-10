//// 중식당의 주문과정 _ 메뉴와 사람수를 입력 받고 이를 출력
//#include <iostream>
//using namespace std;
//
//int main() {
//    int ch = 0, num;
//    cout << "***** 승리장에 오신 것을 환영합니다. *****" << endl;
//    while (true) {
//        cout << "짬뽕:1, 짜장:2, 군만두:3, 종료:4>>  ";
//        cin >> ch;
//        if (ch <= 0 or ch > 4) {
//            cout << "다시 주문하세요!!" << endl;
//            continue;
//        }
//        if (ch == 4) break;
//        cout << "몇인분?";
//        cin >> num;
//        switch (ch) {
//        case 1: cout << "짬뽕 "; break;
//        case 2: cout << "짜장 "; break;
//        case 3: cout << "군만두 "; break;
//        default: break;
//        }
//        cout << num << "인분 나왔습니다" << endl;
//    }
//    cout << "오늘 영업은 끝났습니다.";
//}