/*
���� �Լ��� �Ű� ������ �־��� �� ���� int�迭�� ������ ���ο� int�迭�� �����Ҵ� �޾� �����Ѵ�.
```
int *concat(int a[], int sizea, int b[], int sizeb);
```
concat�� int�迭 �� �ƴ϶� �ٸ� Ÿ���� �迭�� ó���� �� �ֵ��� �Ϲ�ȭ �϶�.
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