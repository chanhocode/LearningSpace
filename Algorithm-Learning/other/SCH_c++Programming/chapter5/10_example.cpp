// 참조를 리턴하는 코드를 작성, append()는 Buffer 객체에 문자열을 추가하고 Buffer 객체에 대한 참조를 반환

//#include <iostream>
//#include <string>
//using namespace std;
//
//class Buffer {
//    string text;
//public:
//    Buffer(string text) {
//        this->text = text;
//    }
//    void add(string text) { this->text += text; }
//    void print() { cout << text << endl; }
//};
//
//Buffer& append(Buffer& buf, string text) {
//    buf.add(text);
//    return buf;
//}
//
//int main() {
//    Buffer buf("Hello");
//    Buffer& temp = append(buf, "Guys");
//    temp.print();
//    buf.print();
//}