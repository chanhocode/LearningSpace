package ex05;

public class Chicken {
    static String brand = "ABC";
    static String contact () {
        return "%s입니다. 무엇을 도와드릴까요?".formatted(brand);
    }

    int no;
    String name;

    Chicken(int no, String name) {
        this.no = no;
        this.name = name;
    }

    String intro () {
        return "안녕하세요, %s %d호 %s점입니다."
                .formatted(brand, no, name);
    }
}
