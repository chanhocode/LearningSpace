/*
다음 코드를 실행되도록 Clircle을 상속받은 NameCircle클래스를 작성하고 전체프로그램을 완성하라.
```
NamedCircle waffle(3, "waffle");
waffle.show();

-> 반지름이 3인 waffle
```
*/

#include <iostream>
#include <string>

using namespace std;

// Clrcle
class Circle {
    int radius;
public:
    Circle(int radius = 0) { this->radius = radius; }
    int getRadius() { return radius; }
    int setRadius(int radius) { this->radius = radius; }
    double getArea() { return 3.14 * radius * radius; }
};

// code

class NamedCircle :public Circle {
    string name;
public:
    NamedCircle(int radius = 0, string name = "") :Circle(radius) {
        this->name = name;
    }
    void show() {
        cout << "반지름이 " << getRadius() << "인 " << name << endl;
    }
};

int main() {
    NamedCircle waffle(3, "waffle");
    waffle.show();
    return 0;
}