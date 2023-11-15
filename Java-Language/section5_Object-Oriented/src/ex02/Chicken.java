package ex02;

public class Chicken {
    int no;
    String name;

    String intro () {
        return "안녕하세요, %d호 %s점입니다.".formatted(no, name);
    }
}
