// 영문 텍스트를 입력받아 알파벳 히스토그램을 그리는 프로그램을 작성하라. 대문자는 모두 소문자로 집계하며, 텍스트 입력의 끝은 ';' 문자로 한다.
//#include <iostream>
//#include <cstring>
//using namespace std;
//
//int main() {
//    int total = 0;
//    int alphabet[26] = { 0, };
//    char sentence[10000];
//    cout << "영문 텍스트를 입력하세요. 히스토그램을 그립니다.\n" << "텍스트의 끝은 ; 입니다. 10000개까지 가능합니다.\n";
//    cin.getline(sentence, 10000, ';');
//    for (int i = 0; i < strlen(sentence); i++) {
//        int ascii = (int)(tolower(sentence[i])) - 97;
//        if (ascii >=0 and ascii < 26) {
//            total++;
//            alphabet[ascii]++;
//        }
//    }
//    cout << "총 알파벳 수 " << total << endl;
//    for (int i = 0; i < 26; i++) {
//        cout << (char)(i + 97) << " (" << alphabet[i] << ")\t: ";
//        for (int j = 0; j < alphabet[i]; j++) cout << "*";
//        cout << endl;
//    }
//}

/*

int main() {
	char str[10000];
	int alphabet[26] = { 0 }, ind;

	cout << "영문 텍스트를 입력하세요. 히스토그램을 그립니다. 텍스트의 끝은 ;입니다. 10000개까지 가능합니다.\n";
	cin.getline(str, 10000, ';');
	cout << "총 알파벳 수 " << strlen(str) << '\n';

	for (int i = 0; i < strlen(str); i++)
	{
		if (str[i] >= 'A' && str[i] <= 'Z')
		{
			ind = (int)(str[i] - 'A');
			alphabet[ind]++;
		}
		else if (str[i] >= 'a' && str[i] <= 'z')
		{
			ind = (int)(str[i] - 'a');
			alphabet[ind]++;
		}
		else { }
	}

	for (int i = 0; i < 26; i++)
	{
		cout << (char)('a' + i) << " ("<<alphabet[i]<<")\t : ";
		for (int j = 0; j < alphabet[i]; j++)
		{
			cout << "*";
		}
		cout<<"\n";
	}
	return 0;
}


*/