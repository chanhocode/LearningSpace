/*
#include <iostream>
#include <string>
using namespace std;
int main() {
    string word;
    int count = 0;
    cin >> word;
    for (int i = 0; i < word.length(); i++) {
        if ((word[i] == 'l' or word[i] == 'n') and word[i + 1] == 'j') {
            count++;
            i++;
            continue;
        }
        if (word[i] == 'c' or word[i] == 'd' or word[i] == 's' or word[i] == 'z') {
            if (word[i + 1] == '=') {
                count++;
                i++;
                continue;
            }
            if (word[i + 1] == '-' and word[i] != 's' and word[i] != 'z') {
                count++;
                i++;
                continue;
            }
            if (word[i] == 'd' and word[i + 1] == 'z' and word[i + 2] == '=') {
                count++;
                i += 2;
                continue;
            }
        }
        count++;
    }
    cout << count;
}
*/
// 더 쉬운 방법
/*
#include <iostream>
#include <string>
#include <vector>
using namespace std;
int main() {
    vector<string> croatian = {"c=","c-","dz=","d-","lj","nj","s=","z="};
    int idx;
    string str;
    cin >> str;
    for(int i = 0; i < croatian.size(); i++)
    {
        while(1){
            idx = str.find(croatian[i]);
            if(idx == string::npos)
                break;
            str.replace(idx,croatian[i].length(),"#");
        }
    }
    cout << str.length();
}
*/