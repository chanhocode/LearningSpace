/*
#include <iostream>
#include <string>
using namespace std;
int main() {
    string word;
    int alphabet[26] = { 0, };
    cin >> word;
    for (int i = 0; i < word.length(); i++) {
        word[i] = toupper(word[i]);
        alphabet[(int)word[i] - 65]++;
    }
    int max = 0;
    int count = 0;
    char al;
    for (int i = 0; i < 26; i++) {
        if (alphabet[i] >= max) {
            if (alphabet[i] == max) count++;
            else count = 0;
            max = alphabet[i];
            al = (char)65 + i;
        }
    }
    if (count == 0) cout << al;
    else cout << "?";

}
*/