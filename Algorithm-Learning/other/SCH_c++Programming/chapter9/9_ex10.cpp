/*
간단한 그래픽 편집기를 콘솔 바탕으로 만들어보자. 그래픽 편집기의 기능은 삽입,삭제,모두보기,종료
4가지 이다.
*/

//#include <iostream>
//
//using namespace std;
//
//class Shape {
//	Shape* next;
//protected:
//	virtual void draw() = 0;
//public:
//	Shape() { next = NULL; }
//	virtual ~Shape() {}
//	Shape* add(Shape* p) {
//		this->next = p;
//		return p;
//	}
//	void paint() {
//		draw();
//	}
//	Shape* getNext() { return next; }
//};
//
//class Line : public Shape {
//protected:
//	virtual void draw() {
//		cout << "Line" << endl;
//	}
//};
//
//class Circle : public Shape {
//protected:
//	virtual void draw() {
//		cout << "Circle" << endl;
//	}
//};
//
//class Rectangle : public Shape {
//protected:
//	virtual void draw() {
//		cout << "Rectangle" << endl;
//	}
//};
//
//class UI {
//public:
//	static int getMenu() {
//		int key;
//		cout << "삽입:1, 삭제:2, 모두보기:3, 종료:4 >>";
//		cin >> key;
//		return key;
//	}
//	static int getShapeTypeToInsert() {
//		int key;
//		cout << "선:1, 원:2, 사각형:3 >>";
//		cin >> key;
//		return key;
//	}
//	static int getShapeIndexToDelete() {
//		int key;
//		cout << "삭제하고자 하는 도형의 인덱스 >>";
//		cin >> key;
//		return key;
//	}
//};
//
//class GraphicEditor {
//	Shape* pStart;
//	Shape* pLast;
//public:
//	GraphicEditor() { pStart = pLast = NULL; }
//	void insertItem(int type) {
//		Shape* p = NULL;
//		switch (type) {
//		case 1:
//			p = new Line();
//			break;
//		case 2:
//			p = new Circle();
//			break;
//		case 3:
//			p = new Rectangle();
//			break;
//		default:
//			break;
//		}
//		if (pStart == NULL) {
//			pStart = p;
//			pLast = p;
//			return;
//		}
//		pLast->add(p);
//		pLast = pLast->getNext();
//	}
//	void deleteItem(int index) {
//		Shape* pre = pStart;
//		Shape* tmp = pStart;
//		if (pStart == NULL) {
//			cout << "도형이 없습니다!" << endl;
//			return;
//		}
//		for (int i = 1; i < index; i++) {
//			pre = tmp;
//			tmp = tmp->getNext();
//		}
//		if (tmp == pStart) {			//첫번째 도형을 삭제하는 경우
//			pStart = tmp->getNext();
//			delete tmp;
//		}
//		else {
//			pre->add(tmp->getNext());
//			delete tmp;
//		}
//	}
//	void show() {
//		Shape* tmp = pStart;
//		int i = 1;
//		while (tmp != NULL) {
//			cout << i++ << ": ";
//			tmp->paint();
//			tmp = tmp->getNext();
//		}
//	}
//	void run() {
//		cout << "그래픽 에디터입니다." << endl;
//		int menu, index, type;
//		while (true) {
//			menu = UI::getMenu();
//			switch (menu) {
//			case 1:
//				type = UI::getShapeTypeToInsert();
//				insertItem(type);
//				break;
//			case 2:
//				index = UI::getShapeIndexToDelete();
//				deleteItem(index);
//				break;
//			case 3:
//				show();
//				break;
//			default:
//				return;
//			}
//		}
//	}
//};
//
//int main() {
//	GraphicEditor graphicEditor;
//	graphicEditor.run();
//}