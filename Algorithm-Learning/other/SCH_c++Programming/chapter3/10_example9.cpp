/*

Oval 클래스는 주어진 사각형에 내접하는 타원을 추상화한 클래스이다. (선언부와 구현부로 나누어 작성하라.)
- 정수값의 사각형 너비와 높이를 가지는 width, height 변수 멤버
- 너비와 높이 값을 매개 변수로 받는 생성자
- width와 height를 출력하는 소멸자
- 타원의 너비를 리턴하는 getWidth() 함수 멤버
- 타원의 높이를 리턴하는 getHeight() 함수 멤버
- 타원의 너비와 높이를 변경하는 set(int w, int h) 함수 멤버
- 타원의 너비와 높이를 화면에 출력하는 show() 함수 멤버

*/

/*
#include <iostream>
#include <string>

using namespace std;

class Oval {
private:
	int width;
	int height;
public:
	Oval() {
		width = height = 1;
	}
	Oval(int width, int height) {
		this->width = width;
		this->height = height;
	}
	~Oval() {
		cout << "Oval 소멸 : width = " << width << ", height = " << height << endl;
	}
	void show() {
		cout << "width = " << width << ", height = " << height << endl;
	}
	void set(int width, int height) {
		this->width = width;
		this->height = height;
	}
	int getWidth() {
		return width;
	}
	int getHeight() {
		return height;
	}
};

int main() {
	Oval a, b(3, 4);
	a.set(10, 20);
	a.show();
	cout << b.getWidth() << "," << b.getHeight() << endl;

	return 0;
}
*/