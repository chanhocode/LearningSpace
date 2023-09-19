/*

#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    int a;
    char b[4];

    int c[3];
    int multiply = 0;
    cin >> a;
    cin >> b;
    for (int i = 2; i >=0; i--) {
        c[i] = a * (b[i] - '0');
    }
    for (int j = 2; j >= 0; j--) {
        cout << c[j] << endl;
        multiply += c[j] * pow(10, 2-j);
    }
    cout << multiply;
}

*/