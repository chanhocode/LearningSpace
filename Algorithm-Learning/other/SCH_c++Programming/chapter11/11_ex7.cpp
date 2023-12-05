/*
0에서 127까지 ASCII 코드와 해당 문자를 다음과 같이 출력하는 프로그램을 작성하라.
화면에 출력가능하지 않는 ASCII 코드는 '.'으로 출력하라.
*/

//#include <iostream>
//#include <cctype>
//#include <iomanip>
// 
//using namespace std;
//
//void showDec(int d) { // 10진수 
//    cout << setw(10) << dec << d;
//}
//
//void showHexa(int h) { // 16진수
//    cout << setw(10) << hex << h;
//}
//
//void showChar(int c) { // ASCII
//    int i = 0;
//    if ((i = isprint(c)) != 0)
//        cout << setw(10) << (char)c;
//    else
//        cout << setw(10) << ".";
//}
//
//void print() {
//    for (int i = 0; i < 4; i++) {
//        cout << setw(10) << "dec";
//        cout << setw(10) << "hexa";
//        cout << setw(10) << "char";
//    }
//    cout << endl;
//    for (int i = 0; i < 4; i++) {
//        cout << setw(10) << "---";
//        cout << setw(10) << "----";
//        cout << setw(10) << "----";
//    }
//    cout << endl;
//    for (int i = 0; i < 128; i++) {
//        if (i % 4 == 0 && i != 0)
//            cout << endl;
//        showDec(i);
//        showHexa(i);
//        showChar(i);
//    }
//}
//int main() {
//    cout.setf(ios::left);
//    print();
//}
