/*
#include <iostream>
using namespace std;
int main() {
    int num;
    cin >> num;
    int line = (2 * num) - 1;
    for (int i = 0; i < line; i++) {
        int j;
        if (i > line / 2) { // i 6
            for (j = 0; j < i - num + 1; j++) {
                cout << ' ';
            }
            for (int k = 0; k < line - (j * 2); k++) {
                cout << "*";
            }
        }
        else {
            for (j = 0; j < num - i - 1; j++) {
                cout << ' ';
            }
            for (int k = 0; k < line - (j * 2); k++) {
                cout << "*";
            }
        }

        cout << endl;
    }
}
*/