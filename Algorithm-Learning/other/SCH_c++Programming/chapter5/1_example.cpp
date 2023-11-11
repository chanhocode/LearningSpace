// 두개의 Circle 객체를 교환하는 swap() 함수를 참조에의한 호출이 되도록 작성
//#include <iostream>
//#include <string>
//using namespace std;
//
//class Circle {
//    int radius;
//public:
//    Circle():Circle(1) {}
//    Circle(int r) { this->radius = r; }
//    void show() {
//        cout << "반지름:" << radius << endl;
//    }
//};
//
//void swap(Circle& a, Circle& b) {
//    Circle tmp;
//
//    tmp = a;
//    a = b;
//    b = tmp;
//}
//
//int main() {
//    Circle a(1), b(2);
//    a.show();
//    b.show();
//
//    swap(a, b);
//    a.show();
//    b.show();
//}