#include <iostream>
#include <string>
using namespace std;

// (1)
//int main() {
//    string sentence;
//    int cnt = 0;
//    cout << "문자열 입력>> ";
//    getline(cin, sentence);
//    for (int i = 0; i < sentence.length(); i++) {
//        if (sentence[i] == 'a') cnt++;
//    }
//    cout << "문자 a는 " << cnt << "개 있습니다." << endl;
//}

// (2)
//int main() {
//    string sentence;
//    int cnt = 0, ind = 0;
//    cout << "문자열 입력>> ";
//    getline(cin, sentence);
//    while (true) {
//        ind = sentence.find('a', ind);
//        if (ind == -1) break;
//        cnt++;
//        ind++;
//    }
//    cout << "문자 a는 " << cnt << "개 있습니다." << endl;
//}