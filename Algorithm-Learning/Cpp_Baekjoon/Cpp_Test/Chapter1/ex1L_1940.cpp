//#include <iostream>
//using namespace std;

/*
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int num, unique, ps, target;
    int cnt = 0;
    cin >> num >> unique;

    int *matter = new int[10000001];
    fill(matter, matter + 10000001, 0);

    int* accumulate = new int[num];
    for (int i = 0; i < num; i++) {
        cin >> ps;
        matter[ps]++;
        accumulate[i] = ps;
    }

    for (int i = 0; i < num; i++) {
        if (matter[accumulate[i]] < 1) continue;
        target = unique - accumulate[i];
        if (target > 0 and matter[target] > 0 and target != accumulate[i]) {
            matter[accumulate[i]]--;
            matter[target]--;
            cnt++;
        }
    }
    cout << cnt;
    delete[] accumulate;
}
*/

// ÃÖÀûÈ­ _ combination
//int n, m, a[15001], cnt;
//int main() {
//    ios_base::sync_with_stdio(false);
//    cin.tie(NULL);
//    cin >> n >> m;
//    for (int i = 0; i < n; i++) cin >> a[i];
//    if (m > 200000) cout << 0 << '\n';
//    else {
//        for (int i = 0; i < n; i++) {
//            for (int j = i + 1; j < n; j++) {
//                if (a[i] + a[j] == m) cnt++;
//            }
//        }
//        cout << cnt << "\n";
//    }
//}