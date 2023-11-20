package ex06;

import java.util.Optional;

/*
* # Optional
* - Optional<T>: null일 수도 있는 T 타입의 값
* */
public class Main {
    public static void main(String[] args) {
         // of() : 담으려는 것이 확실히 있을 때 사용, null을 담으면 NPE(NullPointException)
        Optional<String> catOpt = Optional.of("Cat");

        // ofNullable: 담으려는 것이 null일 수도 있을 때
        Optional<String> dogOut = Optional.ofNullable("Dog");
        Optional<String> cowOpt = Optional.ofNullable(null);

        // 명시적으로 null을 담으려면 empty 메서드 사용
        Optional<String> henOpt = Optional.empty();
    }
}
