// int 타입의 정수를 객체화한 Integer 클래스를 작성하라. Integer의 모든 멤버 함수를 자동 인라인으로 작성

/*
#include <iostream>
#include <string>

using namespace std;

class Integer {
public:
	int n;
	Integer(int n) {
		this->n = n;
	}
	Integer(string str) {
		this->n = stoi(str);
	}
	void set(int n) {
		this->n = n;
	}
	int get() {
		return n;
	}
	bool isEven() {
		if (n % 2 == 0) return true;
		else return false;
	}
};

int main() {
	Integer n(30);
	cout << n.get() << ' ';
	n.set(50);
	cout << n.get() << ' ';

	Integer m("300");
	cout << m.get() << ' ';
	cout << m.isEven();

	return 0;
}
*/