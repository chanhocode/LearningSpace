/*

Oval Ŭ������ �־��� �簢���� �����ϴ� Ÿ���� �߻�ȭ�� Ŭ�����̴�. (����ο� �����η� ������ �ۼ��϶�.)
- �������� �簢�� �ʺ�� ���̸� ������ width, height ���� ���
- �ʺ�� ���� ���� �Ű� ������ �޴� ������
- width�� height�� ����ϴ� �Ҹ���
- Ÿ���� �ʺ� �����ϴ� getWidth() �Լ� ���
- Ÿ���� ���̸� �����ϴ� getHeight() �Լ� ���
- Ÿ���� �ʺ�� ���̸� �����ϴ� set(int w, int h) �Լ� ���
- Ÿ���� �ʺ�� ���̸� ȭ�鿡 ����ϴ� show() �Լ� ���

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
		cout << "Oval �Ҹ� : width = " << width << ", height = " << height << endl;
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