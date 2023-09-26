/*
#include <iostream>
#include <string>
using namespace std;

int main() {
    int loop;
    string word;
    int count = 0;
    cin >> loop;
    for (int i = 0; i < loop; i++) {
        int alphabet[26] = { 0, };
        cin >> word;
        int check = 1;
        for (int j = 0; j < word.length()-1; j++) {
            if (alphabet[word[j+1] - 97] == -1) {
                check = 0;
                break;
            }
            if (word[j] == word[j + 1]) alphabet[(int)word[j] - 97]++;
            else alphabet[(int)word[j] - 97] = -1;
        }
        if (check == 1) count++;
    }
    cout << count;
}
*/