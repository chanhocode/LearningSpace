/*
Shape클래스를 상속받아 타원을 표현하는 Oval, 사각형을 표현하는 Rect, 삼각형을 표현하는 Triangular
클래스를 작성하라.
*/

//#include <iostream>
//
//using namespace std;
//
//class Shape {
//protected:
//	string name;
//	int width, height;
//public:
//	Shape(string n = "", int w = 0, int h = 0) { name = n; width = w; height = h; }
//	virtual double getArea() { return 0; }
//	string getname() { return name; }
//};
//
//class Oval :public Shape {
//public:
//	Oval(string n, int w, int h) : Shape(n, w, h) { }
//	double getArea() {
//		return width * height * 3.14;
//	}
//};
//
//class Rect :public Shape {
//public:
//	Rect(string n, int w, int h) : Shape(n, w, h) { }
//	double getArea() {
//		return width * height;
//	}
//};
//
//class Triangular :public Shape {
//public:
//	Triangular(string n, int w, int h) : Shape(n, w, h) { }
//	double getArea() {
//		return width * height * 0.5;
//	}
//};
//
//int main() {
//	Shape* p[3];
//	p[0] = new Oval("빈대떡", 10, 20);
//	p[1] = new Rect("찰떡", 30, 40);
//	p[2] = new Triangular("토스트", 30, 40);
//
//	for (int i = 0; i < 3; i++) {
//		cout << p[i]->getname() << " 넓이는 " << p[i]->getArea() << endl;
//	}
//
//	for (int i = 0; i < 3; i++) delete p[i];
//}
