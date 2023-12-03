/*
LoopAdder 클래스를 상속받아 다음 결과와 같이 ForLoopAdder클래스를 작성하라.
FoorLoopAdder 클래스의 calculate함수는 for문을 이용하여 합을 구한다.
```
int main() {
    ForLoopAdder forLoop("For Loop");
    forLoop.run();
} ->
For Loop:
처음 수에서 두번째 수까지 더합니다. 두 수를 입력하세요 >> 3 10
3에서 10까지의 합 = 52 입니다.
```
*/

//#include <iostream>
//#include <string>
//using namespace std;
//
//class LoopAdder {
//	string name;
//	int x, y, sum;
//	void read();
//	void write();
//protected:
//	LoopAdder(string name = "") { this->name = name; }
//	int getX() { return x; }
//	int getY() { return y; }
//	virtual int calculate() = 0;
//public:
//	void run();
//};
//
//void LoopAdder::read() {
//	cout << name << ":" << endl;
//	cout << "처음 수에서 두번째 수까지 더합니다. 두 수를 입력하세요 >> ";
//	cin >> x >> y;
//}
//void LoopAdder::write() {
//	cout << x << "에서 " << y << "까지의 합 = " << sum << "입니다." << endl;
//}
//void LoopAdder::run() {
//	read();
//	sum = calculate();
//	write();
//}
//
//class ForLoopAdder : public LoopAdder{
//public:
//	ForLoopAdder(string name = "") : LoopAdder(name) { }
//	int calculate() {
//		int ret = 0;
//		for (int i = getX(); i <= getY(); i++) {
//			ret += i;
//		}
//		return ret;
//	}
//};
//
//int main() {
//	ForLoopAdder forLoop("For Loop");
//	forLoop.run();
//}