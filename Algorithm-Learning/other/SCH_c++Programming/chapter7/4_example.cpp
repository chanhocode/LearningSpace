// Book 사전순으로 비교 < 연산자
//#include <iostream>
//#include <string>
//#include <cstring>
//
//using namespace std;
//
//class Book;
//bool operator < (string str, Book b);
//
//class Book {
//	string title;
//	int price, pages;
//public:
//	Book(string title = "", int price = 0, int pages = 0) {
//		this->title = title; this->price = price; this->pages = pages;
//	}
//	void show() {
//		cout << title << ' ' << price << "원 " << pages << " 페이지" << endl;
//	}
//	string getTitle() { return title; }
//	friend bool operator < (string str, Book b);
//};
//bool operator < (string str, Book b) {
//	if (str.compare(b.title) < 0) return true;
//	else return false;
//}
//
//int main() {
//	Book a("청춘", 20000, 300);
//	string b;
//	cout << "책 이름을 입력하세요>>";
//	getline(cin, b);
//	if (b < a)
//		cout << a.getTitle() << "이 " << b << "보다 뒤에 있구나!" << endl;
//	return 0;
//}

// compare()
// 두문자열이 같으면 0 반환
// 첫번째 문자열이 문자 값이 두번째 입력에 비해 작은 경우 0미만 반환
// 큰경우 0보다 큼