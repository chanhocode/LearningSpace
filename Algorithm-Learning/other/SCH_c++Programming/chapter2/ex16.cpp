// ���� �ؽ�Ʈ�� �Է¹޾� ���ĺ� ������׷��� �׸��� ���α׷��� �ۼ��϶�. �빮�ڴ� ��� �ҹ��ڷ� �����ϸ�, �ؽ�Ʈ �Է��� ���� ';' ���ڷ� �Ѵ�.
//#include <iostream>
//#include <cstring>
//using namespace std;
//
//int main() {
//    int total = 0;
//    int alphabet[26] = { 0, };
//    char sentence[10000];
//    cout << "���� �ؽ�Ʈ�� �Է��ϼ���. ������׷��� �׸��ϴ�.\n" << "�ؽ�Ʈ�� ���� ; �Դϴ�. 10000������ �����մϴ�.\n";
//    cin.getline(sentence, 10000, ';');
//    for (int i = 0; i < strlen(sentence); i++) {
//        int ascii = (int)(tolower(sentence[i])) - 97;
//        if (ascii >=0 and ascii < 26) {
//            total++;
//            alphabet[ascii]++;
//        }
//    }
//    cout << "�� ���ĺ� �� " << total << endl;
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

	cout << "���� �ؽ�Ʈ�� �Է��ϼ���. ������׷��� �׸��ϴ�. �ؽ�Ʈ�� ���� ;�Դϴ�. 10000������ �����մϴ�.\n";
	cin.getline(str, 10000, ';');
	cout << "�� ���ĺ� �� " << strlen(str) << '\n';

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