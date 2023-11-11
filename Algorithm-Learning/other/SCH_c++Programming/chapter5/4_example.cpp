// 아래와 같이 원형이 주어진 bigger()를 작성하고 사용자로부터 2개의 정수를 입력받아 큰 값을
// 출력하는 main()을 작성하라. bigger은 인자로 주어진 a,b가 같으면 true 아니면 false를 리턴하고 큰수는 big에 전달

//#include <iostream>
//#include <string>
//using namespace std;
//
//bool bigger(int a, int b, int& big) {
//    if (a == b) {
//        big = a;
//        return true;
//    }
//    else {
//        if (a > b) big = a;
//        else big = b;
//        return false;
//    }
//}
//
//int main() {
//    int a, b, big;
//    a = 5;
//    b = 5;
//    if (bigger(a, b, big)) {
//        cout << "두 수는 같습니다" << endl;
//    }
//    else {
//        cout << a << "와" << b << "중 큰수는 " << big << "입니다." << endl;
//    }
//
//    a = 5;
//    b = 10;
//    if (bigger(a, b, big)) {
//        cout << "두 수는 같습니다" << endl;
//    }
//    else {
//        cout << a << "와" << b << "중 큰수는 " << big << "입니다." << endl;
//    }
//}