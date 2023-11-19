package ex04;

import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * Stream 연산
 * # 중간 연산
 * - peek: 연산과정중 스트림에 영향을 끼치지는 않으면서 주어진 Consumer작업을 실행
 * - filter: 주어진 predicate에 충족하는 연산만 남김
 * - distinct: 중복되지 않는 요소들의 스트림을 반환
 * - map: 주어진 Function에 따라 각 요소들을 변경
 * - sorted: 요소들을 정렬
 * - limit: 주어진 수 만큼의 요소들을 스트림으로 반환
 * - skip: 앞에서 주어진 개수만큼의 요소를 제거
 * - takeWhile/dropWhile: 주어진 Predicate을 충족하는 동안 취하거나 건너뜀
 *
 * # 최종 연산
 * - forEach: 각 요소들에 주어진 Consumer를 실행
 * - count: 요소들의 개수를 반환
 * - min/max: 주어진 Comparator에 따라 최소/최대 값을 반환
 * - reduce: 주어진 초기값과 BinaryOperator로 값들을 하나의 값으로 접어 나감
 */
public class Main {
    public static void main(String[] args) {
        IntStream
                .range(1, 100)
                .filter(i -> i % 2 == 0)
                .skip(10)
                .limit(10)
                .map(i -> i * 10)
                .forEach(System.out::println);

        System.out.println("\n=======================\n");

        String str1 = "Hello World! Welcome to the world of Java~";
        str1.chars().forEach(System.out::println);

        System.out.println("\n=======================\n");

        char str1MaxChar = (char) str1.chars()
                                .max()
                                .getAsInt();

        System.out.println("\n=======================\n");

        // 대소문자 구분 없이 중복 제거한 뒤 정렬하고 쉼표로 구분
        var fromStr1 = str1.chars().boxed() // boxed를 사용하여 Stream<Integer>으로 변환
                .map(i->String.valueOf((char) i.intValue()))
                        .filter(s -> Character.isLetter(s.charAt(0)))
                                .sorted()
                                        .distinct()
                                                .collect(Collectors.joining(", "));

        System.out.println("\n=======================\n");

        // peek으로 중간 과정 확인: 스트림이나 요소를 변경하지 않고 특정 작업 수행함
        var oddSquaresR = IntStream.range(0, 10).boxed()
                .peek(i-> System.out.println("초기값: " + i))
                .filter(i -> i % 2 == 1)
                .peek(i -> System.out.println("홀수만: " + i))
                .map(i -> i * i)
                .peek(i -> System.out.println("제곱: " + i))
                .sorted((i1, i2) -> i1 < i2 ? 1 : -1)
                .peek(i -> System.out.println("역순: " + i))
                .map(String::valueOf)
                .collect(Collectors.joining(", "));

        System.out.println("\n=======================\n");

        Integer[] ints = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        // allMatch(모든 요소가)/anyMatch(어느 한 요소라도): 주어진 Predicate에 부합하는지 여부 반환
        boolean intsMatch = Arrays.stream(ints)
                .allMatch(i -> i > 0);

        System.out.println("\n=======================\n");

        // takeWhile/dropWhile 주어진 Predicate을 충족시킬 때 까지 취함/ 건너뜀
        long afterWhileOp = Arrays.stream(ints)
                        .takeWhile(i->i<4)
                                .peek(System.out::println)
                                        .count();
        System.out.println("----------------------------");

        long afterDropWhileOp = Arrays.stream(ints)
                .dropWhile(i->i<4)
                .peek(System.out::println)
                .count();

        System.out.println("\n=======================\n");

        // sum: 요소의 총합 반환
        int intsSum = IntStream.range(0, 100 + 1)
                        .sum();

        System.out.println("\n=======================\n");

        // reduce: 주어진 BiFunction으로 값을 접어나감
        // seed 값이 없을 때: Optional 반환
        int intReduce = IntStream.range(1, 10)
                .reduce((prev, curr) -> {
                    System.out.printf("prev: %d, cur: %d%n", prev, curr);
                    return prev * curr;
                }).getAsInt();
    }
}
