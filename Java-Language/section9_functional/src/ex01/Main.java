package ex01;

import java.util.function.*;

/**
 * 함수형 인터페이스
 * - 추상 메서드가 하나만 있어야한다.
 * - @FunctionalInterface
 */
public class Main {
    public static void main(String[] args) {
        Printer printer1 = new Printer() {
            @Override
            public void print() {
                System.out.println("람다식이 없었을 때 사용하던 방식");
            }
        };
        Printer printer2 = () ->{
            System.out.println("인자 & 반환값이 없는 람다식");
        };
        Printer printer3 = () -> System.out.println("반환값이 없을 시 { } 생략가능");
        Printer printer4 = () -> {
            System.out.println("코드가 여러 줄 인 경우");
            System.out.println("{ } 생략 불가");
        };
        for (var p : new Printer[] {printer1, printer2, printer3, printer4}) {
            p.print();
        }

        // Returner
        Returner returner1 = () -> {return 1;};
        Returner returner2 = () -> "반환 코드만 있을 시 { }, return 생략가능";
        var returned1 = returner1.returnobj();
        var returned2 = returner2.returnobj();

        // SingleParam
        SingleParam square = (i) -> i*i;
        SingleParam cube = i -> i*i*i;
        var _3_square = square.func(3);
        var _3_cubed = cube.func(3);

        // DoubleParam
        DoubleParam add = (a, b) -> a + b;
        DoubleParam multAndPrint = (a, b) -> {
            var result = a * b;
            System.out.printf("%d * %d = %d%n", a, b, result);
            return result;
        };
        var added = add.func(2, 3);
        var multiplied = multAndPrint.func(2, 3);

        /*
        * java.util.function
        * - Runnable: run(): 인자, 반환 X
        * - Supplier<T>: get(): 반환 T
        * - Consumer<T>: accept(): 인자 T
        * - BiConsumer<T, U>: accept(): 인자 T, U
        * - Function<T, R>: apply(): 인자 T, 반환 R
        * - BiFunction<T, U, R>: apply(): 인자 T, U  반환 R
        * - Predicate<T>: test(): 인자 T, 반환 boolean
        * - ViPredicate<T, U>: test(): 인자 T,U 반환 boolean
        * - UnaryOperator<T>: apply(): 인자 및 반환 T
        * - BinaryOperator<T>: apply(): 인자들 및 반환 T
        */

        // Runnable
        Runnable dogButtonFunc = () -> System.out.println("멍멍");
        Runnable catButtonFunc = () -> System.out.println("야옹");
        Runnable cowButtonFunc = () -> System.out.println("음메");
        dogButtonFunc.run();
        catButtonFunc.run();
        cowButtonFunc.run();

        System.out.println("\n==========Runnable==========\n");

        Button dogButton = new Button("강아지");
        dogButton.setOnClickListener(dogButtonFunc);

        Button catButton = new Button("고양이");
        catButton.setOnClickListener(()->{
            System.out.println("--------------------");
            System.out.println(catButton.getText() + " 울음소리: 야옹");
            System.out.println("--------------------");
        });
        dogButton.onClick();
        catButton.onClick();

        System.out.println("\n==========Supplier==========\n");

        Supplier<String> appName = () -> "오피스";
        Supplier<Double> rand0to10 = () -> Math.random() * 10;
        Supplier<Boolean> randTF = () -> Math.random() > 0.5;

        var sup1 = appName.get();
        var sup2 = rand0to10.get();
        var sup3 = randTF.get();

        System.out.println("\n==========Consumer==========\n");
        Consumer<Button> clickButton = b -> b.onClick();
        BiConsumer<Button, Integer> clickButtonNTimes = (b, n) -> {
            for (var i = 0; i <n; i++) {b.onClick();}
        };
        clickButton.accept(catButton);
        clickButtonNTimes.accept(dogButton, 5);

        System.out.println("\n==========Function==========\n");

        Function<String, Button> getButton = s -> new Button(s);
        BiFunction<String, Runnable, Button> getButtonWFunc = (s, r) -> {
            var b = new Button(s);
            b.setOnClickListener(r);
            return b;
        };
        var goatButton = getButton.apply("염소");
        getButtonWFunc.apply("오리", ()-> System.out.println("꽥꽥")).onClick();

        System.out.println("\n==========Predicate==========\n");

        Predicate<Integer> isOddTester = i -> i % 2 == 1;
        BiPredicate<Character, Integer> areSameCharNum = (c,i) -> (int)c == i;

        var isOddT3 = isOddTester.test(3);
        var isOddT4 = isOddTester.test(4);

        var areSameCN1 = areSameCharNum.test('A', 64);
        var areSameCN2 = areSameCharNum.test('A', 65);
    }
}
