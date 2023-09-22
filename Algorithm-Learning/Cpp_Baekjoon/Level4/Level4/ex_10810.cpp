/*
#include <iostream>
using namespace std;

int main() {
    int length, count, i, j, k;
    cin >> length >> count;
    int* array = new int[length];
 
    for (int m = 0; m < count; m++) {
        cin >> i >> j >> k;
        for (int l = j - i + 1; l > 0; l--) {
            array[i+l-2] = k;
        }
    }
    for (int n = 0; n < length; n++) {
        if (array[n] < 0) array[n] = 0;
        cout << array[n] << ' ';
    }


    delete[] array;
}
*/