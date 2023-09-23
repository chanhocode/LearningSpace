/*
#include <iostream>
using namespace std;

int main() {
    int length, count, temp;
    int a, b;
    cin >> length >> count;
    int* array = new int[length];
    for (int k = 0; k < length; k++) {
        array[k] = k + 1;
    }
    for (int i = 0; i < count; i++) {
        cin >> a >> b;
        temp = array[b - 1];
        array[b - 1] = array[a - 1];
        array[a-1] = temp;
    }
    for (int j = 0; j < length; j++) {
        cout << array[j] << ' ';
    }
    delete[] array;
}
*/