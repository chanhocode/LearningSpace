/*
#include <iostream>
using namespace std;

int main() {
    int cost[4];
    int st, et;
    int money = 0;
    int stay[101];
    fill(&stay[0], &stay[101], 0);
    cin >> cost[1] >> cost[2] >> cost[3];
    for (int i = 0; i < 3; i++) {
        cin >> st >> et;
        for (int i = st + 1; i <= et; i++) stay[i]++;
    }
    for (int check : stay) {
        if (check > 0) money += cost[check] * check;
    }
    cout << money;
}
*/