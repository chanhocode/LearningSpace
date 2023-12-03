/*
두 개의 배열을 비교하여 같은면 true를 아니면, false를 리턴하는 제네릭함수 equalArrays()를 작성하라.
또한 main()함수를 작성하여 equalArrays()를 호출하는 몇 가지 사례를 보여라.
```
int x[] = {1, 10, 100, 5, 4};
int y[] = {1, 10, 100, 5, 4};
if(equalArrays(x, y, 5)) cout << "같다";
else cout << "다르다";
```
*/

//#include <iostream>
//using namespace std;
//
//template<class T>
//bool equalArrays(T a[], T b[], int n) {
//    for (int i = 0; i < n; i++) {
//        if (a[i] != b[i]) return false;
//    }
//    return true;
//}
//
//int main() {
//    int x[] = { 1, 10, 100, 5, 4 };
//    int y[] = { 1, 10, 100, 5, 4 };
//    if (equalArrays(x, y, 5)) cout << "같다";
//    else cout << "다르다";
//}