package ex02;

import java.util.TreeSet;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.UnaryOperator;

/**
 * 메서드 참조
 * : 람다식이 어떤 메서드 하나만 호출할 때 코드를 간략화 한다.
 * , 해당 메서드가 인자와 리턴값 구성이 동일해야 한다.
 */
public class Main {
    public static void main(String[] args) {
        Function<Integer, String> intToStrLD = i -> String.valueOf(i);
        Function<Integer, String> intToStrMR = String::valueOf;
        var intToStr = intToStrMR.apply(123);

        UnaryOperator<String> toLCaseMR = String::toLowerCase;
        var toLCase = toLCaseMR.apply("Hello");

        Function<String, Button> strToButtonMR = Button::new;
        Button button1 = strToButtonMR.apply("Dog");

        BiFunction<String, String, Button> twoStrToButtonLD = (s1, s2) -> new Button(s1, s2);
        BiFunction<String, String, Button> twoStrToButtonMR = Button::new;
        Button button2 = twoStrToButtonMR.apply("고양이", "야옹");
        button2.onClick();

        Runnable catCryMR = button2::onClick;
        catCryMR.run();

        // +
        TreeSet<String> treeSetLD = new TreeSet<>((s1, s2) -> s1.compareTo(s2));
        TreeSet<String> treeSetMD = new TreeSet<>(String::compareTo);
    }
}
