/*
다음 프로그램은 컴파일 오류가 발생한다. 소스의 어디에서 왜 컴파일 오류가 발생하는가?
*/
// Circle과 같은 클래스는 > 연산자가 구현되어 있지 않아 구체화에 실패한다.
/*
#include <iostream>
using namespace std;

class Circle {
    int radius;
public:
    Circle(int radius = 1) { this->radius = radius; }
    int getRadius() { return radius; }
};

template <class T>
T bigger(T a, T b) {
    if (a > b) return a;
    else return b;
}

int main() {
    int a = 20, b = 50, c;
    c = bigger(a, b);
    cout << "20과 50중 큰 값은 " << c << endl;
    Circle waffle(10), pizza(20), y;
    y = bigger(waffle, pizza);
    cout << "waffle과 pizza 중 큰 것의 반지름은 " << y.getRadius() << endl;
}
*/

//#include <iostream>
//using namespace std;
//
//class Circle {
//    int radius;
//public:
//    Circle(int radius = 1) { this->radius = radius; }
//    int getRadius() { return radius; }
//};
//
//template <class T>
//T bigger(T a, T b) {
//    if (a > b) return a;
//    else return b;
//}
//Circle bigger(Circle a, Circle b) {
//    if (a.getRadius() > b.getRadius()) return a;
//    else return b;
//}
//
//int main() {
//    int a = 20, b = 50, c;
//    c = bigger(a, b);
//    cout << "20과 50중 큰 값은 " << c << endl;
//    Circle waffle(10), pizza(20), y;
//    y = bigger(waffle, pizza);
//    cout << "waffle과 pizza 중 큰 것의 반지름은 " << y.getRadius() << endl;
//}