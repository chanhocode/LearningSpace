/*
#include <iostream>
#include <string>
using namespace std;

int main() {
    string sentence;
    getline(cin, sentence);
    for (int i = 0; i < (int)sentence.length(); i++) {
        if (sentence[i] != ' ' and (int)sentence[i] > 57) {
            if ((((int)(sentence[i]) > 109 and (int)(sentence[i]) < 123)) or
                ((int)(sentence[i]) > 77 and (int)(sentence[i]) < 91)) sentence[i] = (char)((int)(sentence[i]) + 13 - 26);
            else sentence[i] = (char)(sentence[i] + 13);   
        }
    }
    cout << sentence;
}
*/