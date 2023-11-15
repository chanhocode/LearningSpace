package ex10;

public class Main {
    public static void main(String[] args) {
        String yCreed = Chicken.CREED;
        // 불가: Chicken.CREED;
        final Chicken store1 = new Chicken(3, "판교");
        // 불가: store1 = new Chicken(17, "강남");
        store1.name = "선릉";
    }
}
