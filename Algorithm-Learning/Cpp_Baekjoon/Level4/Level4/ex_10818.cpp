/*
#include <iostream>
using namespace std;

int main() {
    int length;
    int min = 1000001;
    int max = -1000001;
    cin >> length;
    int* array = new int[length];
    for (int i = 0; i < length; i++) {
        cin >> array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }
    cout << min << " " << max;
    delete[] array;
}
*/