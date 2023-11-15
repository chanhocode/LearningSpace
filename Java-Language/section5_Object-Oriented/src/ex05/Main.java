package ex05;
// 클래스(정적) 필드와 메소드
public class Main {
    public static void main(String[] args) {
        String Brand = Chicken.brand;
        String Contact = Chicken.contact();

        Chicken store1 = new Chicken(3, "판교");
        String st1Intro = store1.intro();

        String st1Brand = store1.brand;
        String st1Contact = store1.contact();
    }
}
