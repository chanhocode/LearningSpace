/*
Converter 클래스를 상속받아 달러를 원화로 환산하는 WonToDollar 클래스를 작성하라.
*/

#include <iostream>
#include <string>
using namespace std;

class Converter {
protected:
    double ratio;
    virtual double convert(double src) = 0;
    virtual string getSourceString() = 0;
    virtual string getDestString() = 0;
public:
    Converter(double ratio) { this->ratio = ratio; }
    void run() {
        double src;
        cout << getSourceString() << "을 " << getDestString() << "로 바꿉니다. ";
        cout << getSourceString() << "을 입력하세요>> ";
        cin >> src;
        cout << "변환 결과: " << convert(src) << getDestString() << endl;
    }
};

class WonToDollar : public Converter {
public:
    WonToDollar(double ratio = 0.0) : Converter(ratio) {}
    double convert(double src) { return src / ratio; }
    string getSourceString() { return "원"; }
    string getDestString() { return "달러"; }
};

int main() {
    WonToDollar wd(1010);
    wd.run();
}