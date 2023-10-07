/*
#include <iostream>
#include <string>
using namespace std;


int main() {
    int cnt;
    string pattern, filename;
    cin >> cnt;
    cin >> pattern;
    for (int i = 0; i < cnt; i++) {
        int check = 1;
        int aw = 0;
        cin >> filename;
        for (int i = 0; i < (int)pattern.length(); i++) {
            aw++;
            if (pattern[i] == '*') break;
            if (filename[i] != pattern[i]) {
                check = 0;
                break;
            }
        }
        if ((((int)filename.length() - aw) < ((int)pattern.length() - aw-1))) check = 0;
        if (check == 1) {
            int num = (int)filename.length() - 1;
            for (int i = (int)pattern.length()-1; i > 0; i--) {
                if (pattern[i] == '*') break;
                if (filename[num] != pattern[i]) {
                    check = 0;
                    break;
                }
                num--;
            }
        }
        if (check == 1) cout << "DA" << endl;
        else cout << "NE" << endl;

    }
}
*/

// ÃÖÀûÈ­
/*
int main() {
    int n;
    string s, ori_s, pre, suf;
    cin >> n;
    cin >> ori_s;
    int pos = ori_s.find('*');
    pre = ori_s.substr(0, pos);
    suf = ori_s.substr(pos + 1);
    for (int i = 0; i < n; i++) {
        cin >> s;
        if (pre.size() + suf.size() > s.size()) cout << "NE";
        else {
            if (pre == s.substr(0, pre.size()) and suf == s.substr(s.size() - suf.size())) cout << "DA";
            else cout << "NE";
        }
    }
}
*/