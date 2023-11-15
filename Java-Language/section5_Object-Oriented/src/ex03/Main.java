package ex03;
// 생성자
public class Main {
    public static void main(String[] args) {
        Chicken store1 = new Chicken(3, "판교");
        Chicken store2 = new Chicken(17, "강남");
        Chicken store3 = new Chicken(24, "제주");

        String[] intros = {store1.intro(), store2.intro(), store3.intro()};
    }
}
