/*
#include <iostream>
#include <string>
#include <unordered_map>
#include <cctype>
using namespace std;

unordered_map<int, string> encyclopedia;
unordered_map<string, int> valEncyclopedia;
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int num, cnt;
	string input;
	string pokemon;

	cin >> num >> cnt;
	for (int i = 0; i < num; i++) {
		cin >> pokemon;
		encyclopedia.insert({ i + 1 , pokemon});
		valEncyclopedia.insert({ pokemon, i + 1 });
	}

	for (int i = 0; i < cnt; i++) {
		cin >> input;
		if (isdigit(input[0])) cout << encyclopedia[stoi(input)] << '\n';
		else cout << valEncyclopedia[input] << '\n';
	}
}
*/