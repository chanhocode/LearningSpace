/*
배열의 원소를 반대 순서로 뒤집는 reverseArray() 함수를 템플릿으로 작성하라.
reverseArray() 의 첫번째 매개변수는 배열에 대한 포인터이며 두 번째 매개변수는 배열의 개수이다.
```
int x[] = {1,10,100,5,4};
reverseArray(x, 5);
for(int i=0; i<5; i++) cout << x[i] << ' '; // 4 5 100 10 1
```
*/

//#include<iostream>
//using namespace std;
//
//template<class T>
//void reverseArray(T arr[], int n) {
//    for (int i = 0; i < n / 2; i++) {
//        T tmp = arr[i];
//        arr[i] = arr[n - i - 1];
//        arr[n - i - 1] = tmp;
//    }
//}
//
//int main() {
//    int x[] = { 1, 10, 100, 5, 4 };
//    for (int i = 0; i < 5; i++) cout << x[i] << ' ';
//    cout << endl;
//    reverseArray(x, 5);
//    for (int i = 0; i < 5; i++) cout << x[i] << ' ';
//}