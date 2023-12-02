/*
아래와 같은 BaseMemory 클래스를 상속받는 ROM, RAM 클래스를 작성하라.
```
class BaseMemory {
    char *mem;
protected:
    BaseMemory(int size) { mem = new char[size]; }
};
```
ROM은 읽기 전용 메모리 이므로  작동 중에 값을 쓸 수가 없기 때문에, 공장에서 생산할때 생산자가
요청한 데이터로 초기화하는데 이 작업을 굽는다라고 한다. 그러므로 ROM은 반드시 생성자에서 burn작업이
일어나야한다. 다음은 ROM과 RAM메모리를 생성하고 사용하는 사례이다. ROM의 0번지 에서 4번지까지 읽어
RAM 메모리의 0~4번지에 쓰고, 다시 RAM메모리의 값을 화면에 출력한다.
*/

#include <iostream>
using namespace std;

class BaseMemory {
	char* mem;
protected:
	BaseMemory(int size) { mem = new char[size]; }
	void setData(char x, int length) { mem[length] = x; }
	void setData(char x[], int length) { for (int i = 0; i < length; i++) mem[i] = x[i]; }
	char getData(int index) { return mem[index]; }
};

class ROM :public BaseMemory {
public:
	ROM(int size, char x[], int length) : BaseMemory(size) { setData(x, length); }
	char read(int index) { return getData(index); }
};

class RAM : public BaseMemory {
public:
	RAM(int size): BaseMemory(size) {}
	void write(int index, char data) { setData(data, index); }
	char read(int index) { return getData(index); }
};

int main() {
	char x[5] = { 'h', 'e', 'l', 'l', 'o' };
	ROM biosROM(1024 * 10, x, 5);
	RAM mainMemory(1024*1024);

	for (int i = 0; i < 5; i++) mainMemory.write(i, biosROM.read(i));
	for (int i = 0; i < 5; i++) cout << mainMemory.read(i);
}