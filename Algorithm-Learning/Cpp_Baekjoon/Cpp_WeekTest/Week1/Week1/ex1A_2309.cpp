#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

/*
int main() {
    int dwarf[9];
    int sum = 0;
    for (int i = 0; i < 9; i++) {
        cin >> dwarf[i];
        sum += dwarf[i];
    }
    int i, j, temp;
    int end = 0;
    for (i = 0; i < 9; i++) {
        temp = sum;
        temp -= dwarf[i];
        for (j = 0; j < 9; j++) {
            if (i == j) continue;
            int c = temp - dwarf[j];
            if (c == 100) {
                dwarf[j] = 102;
                end = 1;
                break;
            }
        }
        if (end == 1) {
            dwarf[i] = 101;
            break;
        }
    }
    sort(dwarf, dwarf+9);
    for (int i = 0; i < 7; i++) cout << dwarf[i] << endl;
}
*/

// 순열
/*
int main() {
    int dwarf[9];
    for (int i = 0; i < 9; i++) {
        cin >> dwarf[i];
    }
    // 순열을 하기 위해서 오름차순 정렬 필요
    sort(dwarf, dwarf + 9);
    do {
        int sum = 0;
        for (int i = 0; i < 7; i++) sum += dwarf[i];
        if (sum == 100) break;
    } while (next_permutation(dwarf, dwarf + 9));
    for (int i = 0; i < 7; i++) cout << dwarf[i] << '\n';
}
*/

// 조합
/*
int sum;
int a[9];
vector<int> v;
pair<int, int> ret;
void solve() {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < i; j++) {
            if (sum - a[i] - a[j] == 100) {
                ret = { i,j };
                return;
            }
        }
    }
}
int main() {
    for (int i=0; i< 9; i++) {
        cin >> a[i];
        sum += a[i];
    }
    solve();
    for (int i = 0; i < 9; i++) {
        if (ret.first == i || ret.second == i) continue;
        v.push_back(a[i]);
    }
    sort(v.begin(), v.end());
    for (int i : v) cout << i << '\n';
}
*/

// 재귀
/*
int n = 9, r = 7;
int a[9];
void solve() {
    int sum = 0;
    for (int i = 0; i < r; i++) {
        sum += a[i];
    }
    if (sum == 100) {
        sort(a, a + 7);
        for (int i = 0; i < r; i++) cout << a[i] << "\n";
        exit(0); // main 함수 종료
    }
}
void makePermutation(int n, int r, int depth) {
    if (r == depth) {
        solve();
        return;
    }
    for (int i = depth; i < n; i++) {
        swap(a[i], a[depth]);
        makePermutation(n, r, depth + 1);
        swap(a[i], a[depth]);
    }
}
int main() {
    for (int i = 0; i < 9; i++) {
        cin >> a[i];
    }
    makePermutation(n, r, 0);
    return 0;
}
*/
