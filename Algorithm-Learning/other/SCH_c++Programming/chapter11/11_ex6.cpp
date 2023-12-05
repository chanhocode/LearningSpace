/*
다음과 같이 정수, 제곱, 제곱근의 값을 형식에 맞추어 출력하는 프로그램을 작성하라.
필드의 간격은 총 15칸이고 제곱근의 유효 숫자는 총 3자리로 한다. 빈칸은 모두 underline(_) 문자로 삽입한다.
*/

#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

void showNum(const double& num) {
    cout << setw(15) << setfill('_') << num;
}

void showSqrt(const double& num) {
    cout << setprecision(3) << setw(15) << setfill('_') << sqrt(num) << endl;
}

int main() {
    cout.setf(ios::left);
    cout << setw(15) << "Number";
    cout << setw(15) << "Square";
    cout << setw(15) << "Square Root" << endl;
    for (double i = 0; i <= 45; i += 5) {
        cout.precision(4);
        showNum(i);
        showNum(i * i);
        showSqrt(i);
    }
}