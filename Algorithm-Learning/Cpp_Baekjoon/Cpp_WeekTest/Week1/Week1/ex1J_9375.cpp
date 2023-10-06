#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	int tCase, wearCnt;
	string type, name;
	cin >> tCase;
	while (tCase--) {
		cin >> wearCnt;
		map<string, int> closet;
		while (wearCnt--) {
			cin >> name;
			cin >> type;
			closet[type] = closet[type]++;
			cout << "test " << type << " : " << closet[type] << endl;
		}
	}

}