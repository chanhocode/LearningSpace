#include <iostream>
using namespace std;

int main() {
    int num, cnt;
    long long result;
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    while (true) {
        cin >> num;
        if (cin.eof()) break;
        cnt = 1;
        result = 1;

        while (true) {
            if (result % num == 0) {
                cout << cnt << endl;
                break;
            }
            else {
                result = (result * 10) + 1;
                result %= num;
                cnt++;

            }
        }
    }
}