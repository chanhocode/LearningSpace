package ex03;

public class Main {
    public static <T> T pickRandom (T a, T b) {
        return Math.random() > 0.5 ? a : b;
    }

    public static void main(String[] args) {
        int randNum = pickRandom(123, 456);
        boolean randBool = pickRandom(true, false);
        String randStr = pickRandom("마루치", "아라치");
    }
}
