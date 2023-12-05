/*
한 줄에 '영어문장;한글문자' 형식으로 키 입력될 때, cin.ignore()를 이용하여 ';'
이전에 입력된 문자열만 출력하는 프로그램을 작성하라.
*/

#include <iostream>
using namespace std;

int main() {
    int ch;
    while ((ch = cin.get()) != EOF) {
        if (ch == ';') {
            cout.put('\n');
            cin.ignore(100, '\n');
        }
        else
            cout.put(ch);
    }
}