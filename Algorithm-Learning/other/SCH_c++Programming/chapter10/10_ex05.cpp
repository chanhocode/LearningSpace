/*
다음 함수는 매개 변수로 주어진 두 개의 int배열을 연결한 새로운 int배열을 동적할당 받아 리턴한다.
```
int *concat(int a[], int sizea, int b[], int sizeb);
```
concat가 int배열 뿐 아니라 다른 타입의 배열도 처리할 수 있도록 일반화 하라.
*/

//#include <iostream>
//using namespace std;
//
//template <class T>
//T* concat(T a[], int sizea, T b[], int sizeb) {
//    T* p = new T[sizea + sizeb];
//    for (int i = 0; i < sizea; i++) {
//        p[i] = a[i];
//    }
//    for (int j = 0; j < sizeb; j++) {
//        p[j + sizea] = b[j];
//    }
//    return p;
//}
//
//int main() {
//    char x[] = { 'a', 'b', 'c', 'd' };
//    char y[] = { 'e', 'f' };
//
//    char* result = concat(x, 4, y, 2);
//    for (int i = 0; i < 6; i++) {
//        cout << result[i] << ' ';
//    }
//    cout << endl;
//
//    delete []result;
//}