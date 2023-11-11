// 스택 최대저장 10
//#include <iostream>
//#include <string>
//
//using namespace std;
//
//class MyIntStack {
//    int p[10];
//    int tos;
//public:
//    MyIntStack();
//    bool push(int n);
//    bool pop(int& n);
//};
//
//MyIntStack::MyIntStack() {
//    tos = -1;
//}
//bool MyIntStack::push(int n) {
//    if (tos >= 9) return false;
//    p[++tos] = n;
//    return true;
//}
//bool MyIntStack::pop(int& n) {
//    if (tos < 0) return false;
//    n = p[tos--];
//    return true;
//}
//
//int main() {
//    MyIntStack a;
//    for (int i = 0; i < 11; i++) {
//        if (a.push(i)) cout << i << ' ';
//        else cout << endl << i + 1 << " 번째 stack full" << endl;
//    }
//    int n;
//    for (int i = 0; i < 11; i++) {
//        if (a.pop(n)) cout << n << ' ';
//        else cout << endl << i + 1 << " 번째 stack empty";
//    }
//    cout << endl;
//
//    return 0;
//}