//#include <iostream>
//using namespace std;
//
//class Sample {
//    int* p;
//    int size;
//public:
//    Sample(int n) {
//        size = n;
//        p = new int[n];
//    }
//    ~Sample() {
//        delete[] p;
//    }
//    void read() { // ���� �Ҵ���� ���� �迭 p�� ����ڷκ��� ������ �Է� ����
//        for (int i = 0; i < size; i++) {
//            int temp;
//            cin >> temp;
//            p[i] = temp;
//        }
//    }
//    void write() { // ���� �迭�� ȭ�鿡 ���
//        for (int i = 0; i < size; i++) {
//            cout << p[i] << ' ';
//        }
//        cout << endl;
//    }
//    int big() { // ���� �迭���� ���� ū �� ����
//        int big = p[0];
//        for (int i = 1; i < size; i++) {
//            if (big < p[i]) big = p[i];
//        }
//        return big;
//    }
//};
//
//int main() {
//    Sample s(10);
//    s.read();
//    s.write();
//    cout << "���� ū ���� " << s.big() << endl;
//}