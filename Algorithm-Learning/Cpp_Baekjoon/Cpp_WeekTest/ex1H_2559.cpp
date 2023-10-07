/*
#include <iostream>
#include <algorithm>
using namespace std;
int main() {
    int cnt, n;
    int maxval = -99999999;
    cin >> cnt >> n;
    int* array = new int[cnt+1];
    int* parray = new int[cnt + 1];
    parray[0] = 0;
    for (int i = 1; i < cnt + 1; i++) {
        cin >> array[i];
        parray[i] = parray[i - 1] + array[i];
    }
    for (int i = 1; i < (cnt + 1) - (n-1); i++) {
        maxval = max(maxval, parray[i + n - 1] - parray[i - 1]);
    }
    cout << maxval;
    delete[] array;
    delete[] parray;
}
*/