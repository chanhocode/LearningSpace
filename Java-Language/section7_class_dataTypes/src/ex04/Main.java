package ex04;

public class Main {
    public static void main(String args) {
        Pocket<Double, Double, Double> size3d1 =
                new Pocket<>(123.45, 234.56, 345.78);

        // 타입추론 가능
        var size3d2 = new Pocket<>(123.45, 234.56, 345.78);

        double width = size3d1.getFieldA();
        double height = size3d1.getFieldB();
        double depth = size3d1.getFieldC();

        Pocket<String, Integer, Boolean> person =
                new Pocket<>("홍길동", 20, false);

        Pocket<String, Integer, Boolean>[] people = new Pocket[] {
                new Pocket<>("홍길동", 20, false),
                new Pocket<>("전우치", 30, true),
                new Pocket<>("임꺽정", 27, true),
        };
    }
}
