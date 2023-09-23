/*
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int num[10];
    int target;
    for (int i = 0; i < 10; i++) {
        cin >> target;
        num[i] = target % 42;
    }
    int n = sizeof(num) / sizeof(num[0]);
    sort(num, num + n);
    int count = 1;
    for (int i = 1; i < 10; i++) {
        if (num[i - 1] != num[i]) count++;
    }
    cout << count;
}
*/

// °³¼±
/*
int main(void) {
    int i, cnt = 0, num[10], rem[42] = { 0, };
    for (i = 0; i < 10; i++) {
        cin >> num[i];
        rem[num[i] % 42]++;
    }
    for (i = 0; i < 42; i++) {
        if (rem[i] != 0) cnt++;
    }
    cout << cnt;
    return 0;
}
*/