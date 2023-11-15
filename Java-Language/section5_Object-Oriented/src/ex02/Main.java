package ex02;

// 클래스 & 인스턴스
public class Main {
    public static void main(String[] args) {
        Chicken store1 = new Chicken();
        store1.no = 3;
        store1.name = "판교";

        Chicken store2 = new Chicken();
        store2.no = 17;
        store2.name = "강남";

        int store1No = store1.no;
        String store2Name = store2.name;

        String store1Intro = store1.intro();
    }
}
