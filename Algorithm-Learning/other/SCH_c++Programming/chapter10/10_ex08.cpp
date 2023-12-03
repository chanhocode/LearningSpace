/*
Circle 클래스가 Comparable을 상속받아 순수 가상함수를 모두 구현하면, 앞의 bigger() 템플릿 함수를
사용하는데 아무 문제가 없다. Circle뿐아니라 Comparable을 상속 받은 모든 클래스를 bigger() 에 사용할 수있다.
Comparable을 상속받은 Circle클래스를 완성하라.
*/

//#include <iostream>
//using namespace std;
//
//class Comparable {
//public:
//    virtual bool operator > (Comparable& op2) = 0;
//    virtual bool operator < (Comparable& op2) = 0;
//    virtual bool operator == (Comparable& op2) = 0;
//};
//
//class Circle :public Comparable {
//    int radius;
//public:
//    Circle(int radius = 1) { this->radius = radius; }
//    int getRadius() { return radius; }
//    bool operator > (Comparable& op2) {
//        Circle* c;
//        c = (Circle*)&op2;
//        if (this->radius > c->getRadius())
//            return true;
//        return false;
//    }
//    bool operator < (Comparable& op2) {
//        Circle* c;
//        c = (Circle*)&op2;
//        if (this->radius < c->getRadius())
//            return true;
//        return false;
//    }
//    bool operator == (Comparable& op2) {
//        Circle* c;
//        c = (Circle*)&op2;
//        if (this->radius == c->getRadius())
//            return true;
//        return false;
//    }
//};
//
//template <class T>
//T bigger(T a, T b) { // 두 개의 매개 변수를 비교하여 큰 값을 리턴
//    if (a > b) return a;
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
