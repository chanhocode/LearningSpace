/*
#include <iostream>
#include <string>
using namespace std;

int main() {
    string call[] = {"ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"};
    string word;
    cin >> word;
    int sum = 0;
    for (int i = 0; i < word.length(); i++) {
        for (int j = 0; j < 8; j++) if (call[j].find(word[i]) != string::npos) sum += j + 3;
    }
    cout << sum;
}
*/