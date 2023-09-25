#include <iostream>
#include <string>
using namespace std;
int main() {
    string word;
    while (true) {
        getline(cin, word);
        if (cin.eof()) break;
        cout << word << endl;
    }
}