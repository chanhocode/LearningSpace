/*
�� �ٿ� '�����;�ѱ۹���' �������� Ű �Էµ� ��, cin.ignore()�� �̿��Ͽ� ';'
������ �Էµ� ���ڿ��� ����ϴ� ���α׷��� �ۼ��϶�.
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