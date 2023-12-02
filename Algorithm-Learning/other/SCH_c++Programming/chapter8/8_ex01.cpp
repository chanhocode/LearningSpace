/*
���� �ڵ带 ����ǵ��� Clircle�� ��ӹ��� NameCircleŬ������ �ۼ��ϰ� ��ü���α׷��� �ϼ��϶�.
```
NamedCircle waffle(3, "waffle");
waffle.show();

-> �������� 3�� waffle
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
        cout << "�������� " << getRadius() << "�� " << name << endl;
    }
};

int main() {
    NamedCircle waffle(3, "waffle");
    waffle.show();
    return 0;
}