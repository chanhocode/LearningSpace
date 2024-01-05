#include <iostream>
#include <string>
#include <stack>
using namespace std;


int main() {
    int num;
    int cnt = 0;
    string word;
    cin >> num;
    for (int i = 0; i < num; i++) {

        stack<char> f_stack;
        stack<char> s_stack;
        cin >> word;
        if (word.length() % 2 > 0) continue;
        for (int j = word.length() - 1; j >= 0; j--) {
            f_stack.push(word[j]);
            word.pop_back();
        }
        while (!f_stack.empty()) {
            if (s_stack.empty()) {
                s_stack.push(f_stack.top());
                f_stack.pop();
            }
            if ((int)f_stack.top() - (int)s_stack.top() == 0) {
                s_stack.pop();
                f_stack.pop();
            }
            else {
                s_stack.push(f_stack.top());
                f_stack.pop();
            }
        }

        if (s_stack.size() == 0) cnt++;

    }
    cout << cnt;
}