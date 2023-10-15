// 날짜를 다루는 Date 클래스를 작성하고자 한다.

/*
#include <iostream>
#include <string>
using namespace std;

class Date {
    int year;
    int month;
    int day;
public:
    Date(int year, int month, int day);
    Date(string birthDay);
    int getYear();
    int getMonth();
    int getDay();
    void show();
};

Date::Date(int year, int month, int day) {
    this->year = year;
    this->month = month;
    this->day = day;
}
Date::Date(string birthDay) {
    int temp[3];
    int pos = 0;
    int i = 0;
    string token = "";
    while ((pos = birthDay.find('/')) != string::npos) {
        token = birthDay.substr(0, pos);
        temp[i] = stoi(token);
        birthDay.erase(0, pos + 1);
        i++;
    }
    this->year = temp[0];
    this->month = temp[1];
    this->day = temp[2];
}
int Date::getYear() {
    return this->year;
}
int Date::getMonth() {
    return this->month;
}
int Date::getDay() {
    return this->day;
}
void Date::show() {
    cout << getYear() << "년" << getMonth() << "월" << getDay() << "일" << endl;
}

int main() {
    Date birth(2014, 3, 20);
    Date independenceDay("1945/8/15");
    independenceDay.show();
    cout << birth.getYear() << ',' << birth.getMonth() << ',' << birth.getDay() << endl;
}
*/

/*
#include <iostream>
#include <string>

using namespace std;

class Date {
public:
    int year;
    int month;
    int day;
    Date(int year, int month, int day);
    Date(string date);
    void show();
    int getYear();
    int getMonth();
    int getDay();
};

Date::Date(int year, int month, int day)
{
    this->year = year;
    this->month = month;
    this->day = day;
}
Date::Date(string date)
{
    int ind;

    this->year = stoi(date);

    ind = date.find('/');
    this->month = stoi(date.substr(ind + 1));

    ind = date.find('/', ind + 1);
    this->day = stoi(date.substr(ind + 1));
}
void Date::show()
{
    cout << year << "년" << month << "월" << day << "일" << endl;
}
int Date::getYear()
{
    return year;
}
int Date::getMonth()
{
    return month;
}
int Date::getDay()
{
    return day;
}

int main() {
    Date birth(2014, 3, 20);
    Date independenceDay("1945/8/15");
    independenceDay.show();
    cout << birth.getYear() << ',' << birth.getMonth() << ',' << birth.getDay() << endl;

    return 0;
}
*/