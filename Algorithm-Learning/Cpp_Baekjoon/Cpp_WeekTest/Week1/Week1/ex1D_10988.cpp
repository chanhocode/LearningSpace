/*
#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    for (int i = 0; i < word.length() / 2; i++) {
        if (word.at(i) != word.at(word.length() - i - 1)) {
            cout << 0;
            return 0;
        }
    }
    cout << 1;
}
*/
// ÃÖÀûÈ­
/*
int main() {
    string word, temp;
    cin >> word;
    temp = word;
    reverse(&temp.begin(), &temp.end());
    if (temp == word) cout << 1;
    else cout << 0;
}
*/