/*
다음 AbstractStack은 정수 스택 클래스로서 추상 클래스이다. 이를 상속받아 정수를 푸시, 팝하는
IntStack클래스를 만들고 사용 사례를 보여라.
*/

#include <iostream>

using namespace std;

class AbstractStack {
public:
	virtual bool push(int n) = 0;
	virtual bool pop(int& n) = 0;
	virtual int size() = 0;
};

class IntStack : public AbstractStack {
	int stack[5] = { 0 };
	int top = -1;
public:
	bool push(int n) {
		if (size() + 1 >= 5) {
			cout << "Stack is full" << endl;
			return false;
		}
		stack[++top] = n;
		return true;
	}
	bool pop(int& n) {
		if (size() < 0) {
			cout << "Stack is empty" << endl;
			return false;
		}
		n = stack[top--];
		return true;
	}
	int size() {
		return top;
	}
	void show() {
		for (int i = 0; i <= top; i++) {
			cout << stack[i] << ' ';
		}
		cout << "," << endl;
	}
};

int main() {
	IntStack intStack;

	intStack.push(1);
	intStack.push(2);
	intStack.push(3);
	intStack.push(4);
	intStack.push(5);

	intStack.show();

	int n;
	intStack.pop(n);
	cout << "Pop: " << n << endl;
	intStack.show();
}