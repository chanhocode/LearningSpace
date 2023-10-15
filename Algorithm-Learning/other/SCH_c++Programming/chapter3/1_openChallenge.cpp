// 실수의 지수 표현을 클래스 Exp로 작성하라.

/*
#include <iostream>
using namespace std;

class Exp {
    int value;
    int base;
    int exp;
public:
    Exp(int base, int exp);
    int getValue();
    int getBase();
    int getExp();
    bool equals(Exp b);
};

Exp::Exp(int base = 1, int exp = 1) {
    this->base = base;
    this->exp = exp;
    int temp = 1;
    for (int i = 0; i < exp; i++) temp *= base;
    this->value = temp;
}
int Exp::getBase() {
    return this->base;
}
int Exp::getExp() {
    return this->exp;
}
int Exp::getValue() {
    return this->value;
}
bool Exp::equals(Exp b) {
    if (this->value == b.getValue()) return true;
    else return false;
}

int main() {
    Exp a(3, 2);
    Exp b(9);
    Exp c;
    cout << a.getValue() << ' ' << b.getValue() << ' ' << c.getValue() << endl;
    cout << "a의 베이스 " << a.getBase() << ',' << "지수 " << a.getExp() << endl;

    if (a.equals(b)) cout << "same" << endl;
    else cout << "not same" << endl;
}
*/