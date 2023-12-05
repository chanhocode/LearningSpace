/*
다음 프로그램은 예제 11-3의 코드이다. 아래 코드에서 char [] 대신 string을 
이용하여 문자열을 다루도록 프로그램을 재작성하라.
*/

#include <iostream>
#include <string>
using namespace std;

int main() {
    char cmd[80];
    cout << "cin.get(char*, int)로 문자열을 읽습니다." << endl;
    while (true) {
        cout << "종료하려면 exit를 입력하세요 >> ";
        cin.get(cmd, 80);
        if (strcmp(cmd, "exit") == 0) {
            cout << "프로그램을 종료합니다....";
            return 0;
        }
        else
            cin.ignore(1);
    }
}
