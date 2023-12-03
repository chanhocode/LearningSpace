/*
Converter 클래스를 상속받아 Km를 mile로 변환하는 KmToMile 클래스를 작성하라.
*/

//#include <iostream>
//#include <string>
//using namespace std;
//
//class Converter {
//protected:
//	double ratio;
//	virtual double convert(double src) = 0;
//	virtual string getSourceString() = 0;
//	virtual string getDestString() = 0;
//public:
//	Converter(double ratio) { this->ratio = ratio; }
//	void run() {
//		double src;
//		cout << getSourceString() << "을 " << getDestString() << "로 바꿉니다. ";
//		cout << getSourceString() << "을 입력하세요>> ";
//		cin >> src;
//		cout << "변환 결과: " << convert(src) << getDestString() << endl;
//	}
//};
//
//class KmToMile : public Converter {
//public:
//	KmToMile(double ratio = 0.0) : Converter(ratio) { }
//	double convert(double src) { return src / ratio; }
//	string getSourceString() { return "Km"; }
//	string getDestString() { return "Mile"; }
//};
//
//int main() {
//	KmToMile toMile(1.609344);
//	toMile.run();
//}