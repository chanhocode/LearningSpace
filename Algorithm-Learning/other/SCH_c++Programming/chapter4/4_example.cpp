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
//    void read() { // 동적 할당받은 정수 배열 p에 사용자로부터 정수를 입력 받음
//        for (int i = 0; i < size; i++) {
//            int temp;
//            cin >> temp;
//            p[i] = temp;
//        }
//    }
//    void write() { // 정수 배열을 화면에 출력
//        for (int i = 0; i < size; i++) {
//            cout << p[i] << ' ';
//        }
//        cout << endl;
//    }
//    int big() { // 정수 배열에서 가장 큰 수 리턴
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
//    cout << "가장 큰 수는 " << s.big() << endl;
//}