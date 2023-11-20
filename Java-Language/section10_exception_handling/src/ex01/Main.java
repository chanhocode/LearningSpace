package ex01;

import java.util.function.IntConsumer;
import java.util.stream.IntStream;

/**
 * # 자바 오류
 * - 컴파일 오류: 컴파일 과정에서 발견되는 오류
 * - 런타임 오류
 *
 * # 런타임 오류
 * - error: 해결 불가능한 문제
 * - exception: 대비하여 해결할 수 있는 문제
 */


public class Main {

    public static void main(String[] args) {
        int[] ints = {1, 2, 3};
        // 예외처리: try-catch
        try {
            System.out.println(ints[3]);
        } catch (Exception e) {
            String errMsg = e.getMessage(); // 예외에 대한 간략 정보 문자열로 반환
            e.printStackTrace(); // 종류, 발생위치, 호출스택 출력
        }
        System.out.println("\n====================\n");

        IntConsumer tryThings2 = null;
        IntStream.rangeClosed(0, 4)
                .forEach(tryThings2);

        System.out.println("\n====================\n");

        // finally: 예외 발생 여부 상관없이 반드시 실행
        withFinally1(false);
        withFinally1(true);
    }

    public static void tryThings2 (int i) {
        try {
            switch (i) {
                case 1: System.out.println((new int[1])[1]);
                case 2: System.out.println("abc".charAt(3));
                case 4: System.out.println(((String) null).length());
            }
            System.out.printf("%d: 예외 없이 정상실행됨%n", i);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.printf("%d : 배열의 크기를 벗어남%n", i);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.printf("%d : 문자열의 길이를 벗어남%n", i);
        } catch (ClassCastException e) {
            System.out.printf("%d : 해당 클래스로 변환 불가%n", i);
        } catch (Exception e) {
            System.out.printf("%d : 기타 다른 오류%n", i);
        }
    }
    public static void withFinally1 (boolean makeException) {
        try {
            if (makeException) System.out.println("".charAt(0));
            System.out.println("예외 없이 정상실행");
        } catch (Exception e) {
            System.out.println("예외 발생");
        } finally {
            System.out.println("반드시 실행");
        }
    }

}
