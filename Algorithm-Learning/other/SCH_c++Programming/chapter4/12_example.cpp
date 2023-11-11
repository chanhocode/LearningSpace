//#include <iostream>
//#include <string>
//
//using namespace std;
//
//class Circle {
//	int radius;
//	string name;
//public:
//	void setCircle(string name, int radius) {
//		this->name = name; this->radius = radius;
//	}
//	double getArea() { return 3.14 * radius * radius; }
//	string getName() { return name; }
//};
//
//class CircleManager {
//	Circle* p;
//	int size;
//public:
//	CircleManager(int size) { p = new Circle[size]; this->size = size; }
//	~CircleManager() { delete[] p; }
//	Circle* getCircle() { return p; }
//	void searchByName();
//	void searchByArea();
//};
//
//void CircleManager::searchByName() {
//	string find;
//	cout << "�˻��ϰ��� �ϴ� ���� �̸� >> ";
//	cin >> find;
//
//	for (int i = 0; i < size; i++) {
//		if (find == p[i].getName()) {
//			//if (find.compare(p[i].getName()) == 0) {
//			cout << p[i].getName() << "�� ������ " << p[i].getArea() << endl;
//			break;
//		}
//	}
//}
//void CircleManager::searchByArea() {
//	int minArea;
//	cout << "�ּ� ������ ������ �Է��ϼ��� >> ";
//	cin >> minArea;
//	cout << minArea << "���� ū ���� �˻��մϴ�." << endl;
//
//	for (int i = 0; i < size; i++) {
//		if (p[i].getArea() > minArea) {
//			cout << p[i].getName() << "�� ������ " << p[i].getArea() << ", ";
//		}
//	}
//	cout << endl;
//}
//
//int main() {
//	int numOfCircles;
//	cout << "���� ���� >> ";
//	cin >> numOfCircles;
//
//	CircleManager circles(numOfCircles);
//
//	for (int i = 0; i < numOfCircles; i++) {
//		cout << "�� " << i + 1 << "�� �̸��� ������ >> ";
//		string name;
//		int r;
//		cin >> name >> r;
//		circles.getCircle()[i].setCircle(name, r);
//	}
//	circles.searchByName();
//	circles.searchByArea();
//
//	return 0;
//}