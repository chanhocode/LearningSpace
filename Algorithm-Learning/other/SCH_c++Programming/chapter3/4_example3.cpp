// ���࿡�� ����ϴ� ���α׷��� �ۼ��ϱ� ����, ���� ���� �ϳ��� ǥ���ϴ� Ŭ����

/*
#include <iostream>
#include <string>
using namespace std;

class Account {
    string name;
    int id;
    int balance;
public:
    Account(string name, int id, int balance);
    string getOwner();
    int inquiry();
    void deposit(int balances);
    void withdraw(int balances);
};

Account::Account(string name, int id, int balance) {
    this->name = name;
    this->id = id;
    this->balance = balance;
}
string Account::getOwner() {
    return this->name;
}
int Account::inquiry() {
    return this->balance;
}
void Account::deposit(int balance) {
    this->balance += balance;
}
void Account::withdraw(int balance) {
    this->balance -= balance;
}

int main() {
    Account a("kitae", 1, 5000);
    a.deposit(50000);
    cout << a.getOwner() << "�� �ܾ��� " << a.inquiry() << endl;
    a.withdraw(20000);
    cout << a.getOwner() << "�� �ܾ��� " << a.inquiry() << endl;
}
*/