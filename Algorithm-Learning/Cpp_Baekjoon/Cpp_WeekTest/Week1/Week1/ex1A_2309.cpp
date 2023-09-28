#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int dwarf[9];
    int sum = 0;
    for (int i = 0; i < 9; i++) {
        cin >> dwarf[i];
        sum += dwarf[i];
    }
    cout << "sum: " << sum << endl;

    int i, j, end, temp;
    for (i = 0; i < 9; i++) {
        temp = sum;
        cout << "temp: " << temp << " sum: " << sum << endl;
        temp -= dwarf[i];
        cout << "temp -= dwarf[i]: " << temp << endl;

        for (j = 0; j < 9; j++) {
            if (i == j) continue;
            int c = temp - dwarf[j];
            if (c == 100) {
                cout << "temp -= dwarf[j]: " << c << endl;
                cout << "제외 " << j << "번: " << dwarf[j] << endl;
                dwarf[j] = 102;
                end = 1;
                break;
            }
        }
        if (end == 1) {
            cout << "제외 " << i << "번: " << dwarf[i] << endl;

            dwarf[i] = 101;
            break;
        }
    }
    sort(dwarf, dwarf+9);
    for (int i = 0; i < 9; i++) cout << dwarf[i] << endl;
}