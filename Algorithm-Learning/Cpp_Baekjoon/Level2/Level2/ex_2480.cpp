#include <iostream>
using namespace std;

int main() {
    int a[3];
    cin >> a[0] >> a[1] >> a[2];

    if (a[0] == a[1] and a[0] == a[2]) {
        cout << 10000 + 1000 * a[1];
    }
    else if (a[0] == a[1] or a[0] == a[2]) {
        cout << 1000 + a[0] * 100;
    }
    else if (a[1] == a[2]) {
        cout << 1000 + a[1] * 100;
    }
    else {
        int max = 0;
        for (int i = 0; i < 3; i++) {
            if (max < a[i]) max = a[i];
        }
        cout << max * 100;
    }
}