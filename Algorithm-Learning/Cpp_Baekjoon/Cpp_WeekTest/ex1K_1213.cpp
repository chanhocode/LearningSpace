#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int alphabet[26]{ 0, };
int main() {
	int odd = 0, check = 1;
	string name;
	string pr;
	cin >> name;
	for (int i = 0; i < name.length(); i++) {
		alphabet[(int)name[i] - 65]++;
	}
	for (int i = 0; i < 26; i++) {
		if (alphabet[i] == 0) continue;
		if (check == 0) break;
	
		if (alphabet[i] % 2 > 0) {
			if (odd > 0) {
				check = 0;
				break;
			}
			odd = i + 65;
		}
		for (int j = 0; j < alphabet[i] / 2; j++) {
			pr.push_back((char)(i + 65));
		}
	}

	if (check == 1) {
		string temp = pr;
		reverse(temp.begin(), temp.end());
		if (odd != 0) {
			pr.push_back((char)(odd));
		}
		pr += temp;
		cout << pr;
	}
	else {
		cout << "I'm Sorry Hansoo";
	}	
}