/*
�� �ٿ� '�����;�ѱ۹���' �������� Ű �Էµ� ��, cin.ignore()�� �̿��Ͽ� ';'���Ŀ�
�Էµ� ���ڿ��� ȭ�鿡 ����ϴ� ���α׷��� �ۼ��϶�. �Ʒ����� ^Z(ctrl-z)Ű�� �Է����Ḧ ��Ÿ���� Ű�̸�,
cin.get()�� EOF�� �����Ѵ�.
*/

// cin.ignore(10); -> �Է½�Ʈ������ 10���� ���ڸ� �����Ѵ�.
// cin.ignore(10, ';'); -> �Է½�Ʈ������ 10���� ���ڸ� ���� �ϸ� ���� ���߿� ';'�� ������
// ';'�� �����ϰ� ����.

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