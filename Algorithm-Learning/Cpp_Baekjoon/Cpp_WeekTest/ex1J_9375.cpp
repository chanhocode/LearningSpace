/*
#include <iostream>
#include <string>
#include <map>
#include <algorithm>
using namespace std;

int tCase, wearCnt;
string type, name;
int main() {
	cin >> tCase;
	while (tCase--) {
		cin >> wearCnt;
		map<string, int> typeCloset;
		for (int i = 0; i < wearCnt; i++) {
			cin >> name >> type;
			typeCloset[type]++;
		}
		long long ret = 1;
		for (auto t : typeCloset) {
			ret *= ((long long)t.second + 1);
		}
		ret--;
		cout << ret << '\n';
	}
}
*/