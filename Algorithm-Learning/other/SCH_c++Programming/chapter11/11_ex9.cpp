/*
Phone 클래스의 객체를 입출력하는 아래 코드와 실행 결과를 참조하여 <<, >> 
연산자를 작성하고 Phone 클래스를 수정하는 등 프로그램을 완성하라.
*/

//#include <iostream>
//using namespace std;
//
//class Phone {
//    string name;
//    string telnum;
//    string address;
//public:
//    Phone(string name = "", string telnum = "", string address = "") {
//        this->name = name;
//        this->telnum = telnum;
//        this->address = address;
//    }
//    friend ostream& operator << (ostream& os, Phone p);
//    friend istream& operator >> (istream& ins, Phone& p);
//};
//
//ostream& operator << (ostream& os, Phone p) {
//    os << "(" << p.name << "," << p.telnum << "," << p.address << ")";
//    return os;
//}
//
//istream& operator >> (istream& ins, Phone& p) {
//    cout << "이름:";
//    ins >> p.name;
//    cout << "전화번호:";
//    ins >> p.telnum;
//    cout << "주소:";
//    ins >> p.address;
//    return ins;
//}
//
//int main() {
//    Phone girl, boy;
//    cin >> girl >> boy;
//    cout << girl << endl << boy << endl;
//}
