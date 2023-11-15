package ex02;

public class Main {
    public static void main(String[] args) {
        // (1) 래퍼 자료형
        int int1 = 123;
        double dbl1 = 3.14;
        char chr1 = 'A';
        boolean bln1 = true;

        Integer int2 = Integer.valueOf(123);
        Double dbl2 = Double.valueOf(3.14);
        Character chr2 = Character.valueOf('A');
        Boolean bln2 = Boolean.valueOf(true);

        // (2) boxing & unboxing
        // boxing: 원시값을 래퍼 클래스의 인스턴스로
        int intPrim1 = 123;
        Integer intInst1 = Integer.valueOf(intPrim1);
        // unboxing: 래퍼 클래스의 인스턴스를 원시값으로
        Double dblInst1 = Double.valueOf(3.14);
        double dblPrim1 = dblInst1.doubleValue();
        // 오토박싱과 언박싱: 명시적으로 처리하지 않아도 컴파일러가 자동처리 (성능상 단점)
        Integer intInst2 = 234;
    }
}
