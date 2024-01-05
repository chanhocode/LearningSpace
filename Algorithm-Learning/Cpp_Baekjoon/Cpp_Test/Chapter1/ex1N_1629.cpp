#include <iostream>
#include <map>
using namespace std;

long long power(long a,  long b, long c) {
    if (b == 1) return a % c;
    long long t = power(a, b / 2, c) % c;
    if (b % 2 > 0) return t * t % c * a % c;
    else return t * t % c;
}

int main() {
    ios_base::sync_with_stdio(false);
    long a, b, c, d;
    cin >> a >> b >> c;
    cout << power(a, b, c);
}