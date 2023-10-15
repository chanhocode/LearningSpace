// 짝수 정수만 랜덤하게 발생

/*
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

class Random {
	int seed = 0;
public:
	int next();
	int nextInRange(int start, int end);
};

int Random::next() {
	//srand((unsigned int)time(0));
	int n;
	do {
		n = rand();
	} while (n % 2 == 1);
	return n;
}
int Random::nextInRange(int start, int end) {
	//srand((unsigned int)time(0));
	int n;
	do {
		n = rand() % (end - start + 1) + start;
	} while (n % 2 == 1);
	return n;
}

int main() {
	Random r;
	cout << "-- 0에서 " << RAND_MAX << "까지의 정수 10개--" << endl;
	for (int i = 0; i < 10; i++) {
		int n = r.next();
		cout << n << ' ';
	}
	cout << endl << endl << "-- 2에서 10까지의 랜덤 정수 10개 --" << endl;
	for (int i = 0; i < 10; i++) {
		int n = r.nextInRange(2, 10);
		cout << n << ' ';
	}
	cout << endl;
	return 0;
}
*/