/*
STL의 vector클래스를 이용하는 간단한 프로그램을 작성하자. vector객체를 생성하고, 키보드로부터
정수를 입력받을 때마다 정수를 벡터에 삽입하고 지금까지 입력된 수와 평균을 출력하는 프로그램을 작성하라.
0을 입력시 프로그램 종료
*/

//#include <iostream>
//#include <vector>
//using namespace std;
//
//int main() {
//    vector<int> v;
//    double sum = 0;
//    while (true) {
//        int tmp;
//        cout << "정수를 입력하세요(0을 입력하면 종료)>>";
//        cin >> tmp;
//        if (!tmp) break;
//        v.push_back(tmp);
//        for (int i = 0; i < v.size(); i++) cout << v.at(i) << ' ';
//        cout << endl;
//        sum += tmp;
//        cout << "평균 = " << sum / v.size() << endl;
//    }
//}