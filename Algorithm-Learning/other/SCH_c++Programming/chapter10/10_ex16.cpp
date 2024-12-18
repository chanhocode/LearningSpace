/*
vector<Shapte*>v; 를 이용하여 간단한 그래픽 편집기를 콘솔 바탕으로 만들어보자.
Shape과 Circle, Line, Rect클래스는 다음과 같다. 생성된 도형 객체를 v에 삽입하고 관리하라.
*/

//#include <iostream>
//#include <vector>
//using namespace std;
//
//class Shape {
//protected:
//    virtual void draw() = 0;
//public:
//    void paint() { draw(); }
//};
//
//class Circle : public Shape {
//protected:
//    virtual void draw() { cout << "Circle" << endl; }
//};
//
//class Rect : public Shape {
//protected:
//    virtual void draw() { cout << "Rectangle" << endl; }
//};
//
//class Line : public Shape {
//protected:
//    virtual void draw() { cout << "Line" << endl; }
//};
//
//class UI {
//public:
//    static int seleteMenu() {
//        int n;
//        cout << "삽입:1, 삭제:2, 모두보기:3, 종료:4 >> ";
//        cin >> n;
//        return n;
//    }
//    static int seleteShape() {
//        int n;
//        cout << "선:1, 원:2, 사각형:3 >> ";
//        cin >> n;
//        return n;
//    }
//    static int seleteDelIndex() {
//        int n;
//        cout << "삭제하고자 하는 도형의 인덱스 >> ";
//        cin >> n;
//        return n;
//    }
//    static void showAll(vector<Shape*>& v, vector<Shape*>::iterator& it) {
//        int i = 0;
//        for (it = v.begin(); it != v.end(); it++, i++) { // vector v의 첫 원소부터 끝 원소까지 탐색 및 출력
//            cout << i << ": ";
//            v.at(i)->paint();
//        }
//    }
//};
//
//class GraphicEditor {
//    vector<Shape*> v;
//    vector<Shape*>::iterator it;
//public:
//    GraphicEditor() {
//        cout << "그래픽 에디터입니다.\n";
//        start();
//    }
//    void start() {
//        while (true) {
//            int n;
//            n = UI::seleteMenu();
//            switch (n) {
//            case 1: //삽입을 선택한 경우
//                n = UI::seleteShape();
//                switch (n) {
//                case 1: //선을 선택한 경우
//                    v.push_back(new Line());
//                    break;
//                case 2: //원을 선택한 경우
//                    v.push_back(new Circle());
//                    break;
//                case 3: //사각형을 선택한 경우
//                    v.push_back(new Rect());
//                    break;
//                default:
//                    cout << "잘못 선택하셨습니다.\n";
//                    break;
//                }
//                break;
//            case 2: { //삭제를 선택한 경우
//                n = UI::seleteDelIndex();
//                if (n >= v.size() || n < 0) { // 없는 인덱스에 대한 예외처리  
//                    cout << "없는 인덱스 입니다.\n";
//                    break;
//                }
//                it = v.begin();
//                Shape* tmp = *(it + n); // vector에서 원소가 삭제되고 난 후 객체 delete를 위해 저장
//                v.erase(it + n); // it+n 위치에 있는 원소 삭제
//                delete tmp; // vector에서 삭제된 객체 delete
//                break;
//            }
//            case 3: //모두 보기를 선택한 경우
//                UI::showAll(v, it); //매개변수로 vector v와 v의 iterator를 넘김
//                break;
//            case 4: // 종료를 선택한 경우 
//                return; //프로그램 종료
//            default:
//                cout << "잘못 입력하셨습니다.\n";
//                break;
//            }
//        }
//    }
//
//};
//
//int main() {
//    new GraphicEditor();
//}
