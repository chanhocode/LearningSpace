/*
한 줄에 '영어문장;한글문자' 형식으로 키 입력될 때, cin.ignore()를 이용하여 ';'이후에
입력된 문자열을 화면에 출력하는 프로그램을 작성하라. 아래에서 ^Z(ctrl-z)키는 입력종료를 나타내는 키이며,
cin.get()은 EOF를 리턴한다.
*/

// cin.ignore(10); -> 입력스트림에서 10개의 문자를 제거한다.
// cin.ignore(10, ';'); -> 입력스트림에서 10개의 문자를 제거 하며 제거 도중에 ';'를 만나면
// ';'를 제거하고 종료.

//#include <iostream>
//using namespace std;
//
//int main() {
//    int ch;
//    cin.ignore(100, ';');
//    while ((ch = cin.get()) != EOF) {
//        cout.put(ch);
//        if (ch == '\n') {
//            cin.ignore(100, ';');
//        }
//    }
//}