/*
#include <iostream>
#include <string>
using namespace std;

int main() {
    int num;
    int cnt[26];
    int check = 0;
    fill(&cnt[0], &cnt[26], 0);
    cin >> num;
    string *player = new string[num];
    for (int i = 0; i < num; i++) {
        cin >> player[i];
        cnt[player[i][0] - 'a']++;
    }
    for (int i = 0; i < 26; i++) {
        if (cnt[i] >= 5) {
            cout << (char)('a' + i);
            check++;
        }
    }
    if (check == 0) cout << "PREDAJA";
    delete[]player;
}
*/
// ÃÖÀûÈ­
/*
int main() {
    int n, cnt[26];
    string player, ret;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> player;
        cnt[player[0] - 'a']++;
    }
    for (int i = 0; i < 26; i++) if (cnt[i] >= 5) ret += (i + 'a');
    if (ret.size()) cout << ret;
    else cout << "PREDAJA";
}
*/