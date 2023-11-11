// 클래스 Accumulator는 add() 함수를 통해 계속 값을 누적하는 클래스

//#include <iostream>
//#include <string>
//using namespace std;
//
//class Accumulator {
//    int value;
//public:
//    Accumulator(int value);
//    Accumulator& add(int n);
//    int get();
//};
//Accumulator::Accumulator(int value) {
//    this->value = value;
//}
//Accumulator& Accumulator::add(int n) {
//    value += n;
//    return *this;
//}
//int Accumulator::get() {
//    return value;
//}
//
//int main() {
//    Accumulator acc(10);
//    acc.add(5).add(6).add(7);
//    cout << acc.get();
//
//    return 0;
//}