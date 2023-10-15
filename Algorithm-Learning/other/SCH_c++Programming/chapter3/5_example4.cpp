// 에스프레소 한잔은 커피와 물이 각각 1 소비, 아메리카노 커피1 물 2, 설탕 커피는 커피1 물2 설탕 1 소비

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
    cout << "커피 머신 상태, 커피:" << this->coffee << "\t물:" << this->water << "\t설탕:" << this->sugar << endl;
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