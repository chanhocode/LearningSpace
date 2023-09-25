/*
#include <iostream>
#include <string>
using namespace std;
int main() {
    string sentence;
    int count = 1;
    getline(cin, sentence);
    if (sentence.length() == 1 and sentence[0] == ' ') count = 0;
    for (int i = 1; i < sentence.length() - 1; i++) {
        if (sentence[i] == ' ' and sentence[i-1] != ' ' and sentence[i+1] != ' ') count++;
    }
    cout << count;
}
*/