// ���������� ������ Ŀ�ǿ� ���� ���� 1 �Һ�, �Ƹ޸�ī�� Ŀ��1 �� 2, ���� Ŀ�Ǵ� Ŀ��1 ��2 ���� 1 �Һ�

/*
#include <iostream>
using namespace std;

class CoffeeMachine {
    int coffee;
    int water;
    int sugar;
public:
    CoffeeMachine(int coffee, int water, int sugar);
    void drinkEspresso();
    void drinkAmericano();
    void drinkSugarCoffee();
    void fill();
    void show();
};

CoffeeMachine::CoffeeMachine(int coffee, int water, int sugar) {
    this->coffee = coffee;
    this->water = water;
    this->sugar = sugar;
}
void CoffeeMachine::drinkEspresso() {
    this->coffee--;
    this->water--;
}
void CoffeeMachine::drinkAmericano() {
    this->coffee--;
    this->water -= 2;
}
void CoffeeMachine::drinkSugarCoffee() {
    this->coffee--;
    this->water -= 2;
    this->sugar--;
}
void CoffeeMachine::fill() {
    this->coffee = 10;
    this->water = 10;
    this->sugar = 10;
}
void CoffeeMachine::show() {
    cout << "Ŀ�� �ӽ� ����, Ŀ��:" << this->coffee << "\t��:" << this->water << "\t����:" << this->sugar << endl;
}

int main() {
    CoffeeMachine java(5, 10, 3);
    java.drinkEspresso();
    java.show();
    java.drinkAmericano();
    java.show();
    java.drinkSugarCoffee();
    java.show();
    java.fill();
    java.show();
}
*/