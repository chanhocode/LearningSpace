/*
디지털 회로에서 기본적인 게이트로 OR게이트 AND, XOR 게이트 등이 있다. 이 게이트들을 각각
ORGate, XORGate, ANDGate 클래스로 작성하고자한다. 각 클래스는 AbstractGate를 상속받도록한다.
*/

//#include<iostream>
//using namespace std;
//
//class AbstractGate {
//protected:
//	bool x, y;
//public:
//	void set(bool x, bool y) { this->x = x; this->y = y; }
//	virtual bool operation() = 0;
//};
//
//class ANDGate : public AbstractGate {
//public:
//	bool operation() {
//		return x & y;
//	}
//};
//
//class ORGate : public AbstractGate {
//public:
//	bool operation() {
//		return x | y;
//	}
//};
//
//class XORGate : public AbstractGate {
//public:
//	bool operation() {
//		return x ^ y;
//	}
//};
//
//int main() {
//	ANDGate andGate;
//	ORGate orGate;
//	XORGate xorGate;
//
//	andGate.set(true, false);
//	orGate.set(true, false);
//	xorGate.set(true, false);
//
//	cout.setf(ios::boolalpha);
//	cout << andGate.operation() << endl;
//	cout << orGate.operation() << endl;
//	cout << xorGate.operation() << endl;
//}