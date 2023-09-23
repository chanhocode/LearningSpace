/*
#include <iostream>
using namespace std;

int main() {
    int length, count;
    cin >> length >> count;
    int* array = new int[length];
    int a, b;
    for (int i = 0; i < length; i++) array[i] = i + 1;
    for (int i = 0; i < count; i++) {
        cin >> a >> b;
        int temp;
        while (b > a) {
            temp = array[b - 1];
            array[b - 1] = array[a - 1];
            array[a - 1] = temp;
            b--;
            a++;
        }
    }
    for (int j = 0; j < length; j++) cout << array[j] << ' ';
}
*/

// 개선점: swap 함수 사용