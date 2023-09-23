#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    int count;
    int max = 0;
    cin >> count;
    int* score = new int[count];
    for (int i = 0; i < count; i++) {
        cin >> score[i];
        if (score[i] > max) max = score[i];
    }
    long double sum =0.0;
    for (int j = 0; j < count; j++) {
        sum += ((double)score[j] / (double)max) * 100;
    }
    cout << (long double)sum / (long double)count;
    delete[] score;
}