//#include <iostream>
//using namespace std;
//
//class Circle {
//    int radius;
//public:
//    void setRadius(int radius) {
//        this->radius = radius;
//    }
//    double getArea() {
//        return 3.14 * radius * radius;
//    }
//};
//
//int main() {
//    int cnt = 0, numOfCircles;
//    cout << "���� ����>>";
//    cin >> numOfCircles;
//    Circle* circles = new Circle[numOfCircles];
//
//    for (int i = 0; i < numOfCircles; i++) {
//        int r;
//        cout << "��" << i + 1 << "�� ������ >>";
//        cin >> r;
//        circles[i].setRadius(r);
//
//        if (circles[i].getArea() > 100) cnt++;
//    }
//    cout << "������ 100���� ū ����" << cnt << "�� �Դϴ�." << endl;
//}