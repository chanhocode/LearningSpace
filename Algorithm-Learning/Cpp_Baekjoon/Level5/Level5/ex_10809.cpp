/*
#include <iostream>
#include <string>
using namespace std;
int main() {
    string word;
    int alphabet[26];
    for (int k = 0; k < 26; k++) alphabet[k] = -1;
    cin >> word;
    for (int i = 0; i < word.length(); i++) {
        if(alphabet[(int)word[i] - 97] == -1) alphabet[(int)word[i] - 97] = i;
    }
    for (int j = 0; j < 26; j++) cout << alphabet[j] << ' ';
}
*/