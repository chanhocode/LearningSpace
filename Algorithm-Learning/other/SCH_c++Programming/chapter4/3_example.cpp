#include <iostream>
#include <string>
using namespace std;

// (1)
//int main() {
//    string sentence;
//    int cnt = 0;
//    cout << "���ڿ� �Է�>> ";
//    getline(cin, sentence);
//    for (int i = 0; i < sentence.length(); i++) {
//        if (sentence[i] == 'a') cnt++;
//    }
//    cout << "���� a�� " << cnt << "�� �ֽ��ϴ�." << endl;
//}

// (2)
//int main() {
//    string sentence;
//    int cnt = 0, ind = 0;
//    cout << "���ڿ� �Է�>> ";
//    getline(cin, sentence);
//    while (true) {
//        ind = sentence.find('a', ind);
//        if (ind == -1) break;
//        cnt++;
//        ind++;
//    }
//    cout << "���� a�� " << cnt << "�� �ֽ��ϴ�." << endl;
//}