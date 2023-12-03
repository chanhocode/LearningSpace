/*
배열을 받아 가장 큰 값을 리턴하는 제네릭 함수 biggest()를 작성하라. 또한 main()함수를
작성여 biggest()를 호출하는 몇 가지 사례를 보여라.
*/

//#include <iostream>
//using namespace std;
//
//template <class T>
//T biggest(T arr[], int n) {
//    T big = arr[0];
//    for (int i = 1; i < n; i++) {
//        if (arr[i] > big) big = arr[i];
//        return big;
//    }
//}
//
//int main() {
//    int x[] = { 1, 10, 100, 5, 4 };
//    cout << biggest(x, 5) << endl;
//}