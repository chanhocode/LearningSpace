package ex09;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        try {
            //supplyAsyncEx();
            //thenAcceptEx1();
            //thenAcceptEx2();
            //exceptionallyEx(true);
            //exceptionallyEx(false);
            all0fEx1();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void takeTime (boolean error) {
        try {
            int randMilliSec = new Random().nextInt(1000, 1500);
            Thread.sleep(randMilliSec);
            System.out.printf("... %f 초 결과 ...%n", randMilliSec/1000.0);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        if (error) throw new RuntimeException("+ 오류 발생");
    }

    public static void supplyAsyncEx() throws ExecutionException, InterruptedException {
        // supplyAsync : Supplier를 받아 비동기 작업 실행
        CompletableFuture<String> getHello = CompletableFuture.supplyAsync(()->{
            takeTime(false);
            return "Hello";
        });

        System.out.println("- - - get 사용 전 - - -");
        // Future 처럼 get을 사용하면 블록킹 발생
        String hello = getHello.get();
        System.out.println("- - - get 사용 후 - - -");
        System.out.println(hello);
    }

    public static void thenAcceptEx1() throws ExecutionException, InterruptedException {
        CompletableFuture<String> getHello = CompletableFuture.supplyAsync(()->{
            System.out.println("값 받아오기 시작");
            takeTime(false);
            return "Hello";
        });

        // thenAccept: 받아온 값을 Consumer로 실행
        CompletableFuture<Void> printHello = getHello.thenAccept(s -> {
            System.out.println("받아온 값 처리 시작");
            takeTime(false);
            System.out.println(s);
        });

        System.out.println("- - - 중간에 다른 코드들 진행 - - -");
        printHello.get();
    }

    public static void thenAcceptEx2 () throws ExecutionException, InterruptedException {
        // 비동기 메소드 체이닝
        CompletableFuture<Void> print5nums =CompletableFuture.supplyAsync(()->{
            List<Integer> ints = new ArrayList<>();
            IntStream.range(0, 5).forEach(i->{
                takeTime(false);
                ints.add(i);
            });
            return ints;
        }).thenAccept(list -> {
            takeTime(false);
            list.stream().forEach(System.out::println);
        });
        System.out.println("- - - 중간 다른 코드 - - -");
        print5nums.get();
    }

    public static void exceptionallyEx (Boolean error) throws ExecutionException, InterruptedException {
        CompletableFuture.supplyAsync(()->{
            takeTime(error);
            return "hi";
        }).exceptionally(e->{
            // exceptionally : 오류 발생시 대체 값 반환
            e.printStackTrace();
            return "no..";
        }).thenApply(s ->{
            takeTime(false);
            return "-> " + s;
        }).thenAccept(
                System.out::println
        ).get();
    }

    public static CompletableFuture<Integer> rollDiceFuture() {
        return CompletableFuture.supplyAsync(() -> {
            System.out.println("주사위 굴림");

            takeTime(new Random().nextBoolean());
            var result = new Random().nextInt(0,6) + 1;
            System.out.println("주사위: " + result);
            return result;
        }).exceptionally(e -> -1);
    }
    public static void all0fEx1 () throws ExecutionException, InterruptedException {
        var roll1 = rollDiceFuture();
        var roll2 = rollDiceFuture();
        var roll3 = rollDiceFuture();
        var roll4 = rollDiceFuture();
        var roll5 = rollDiceFuture();

        // allOf: 여러 CompletableFuture 작업을 동시에 진행한다.
        // thenRun: 결과들을 동기적으로 종합
        CompletableFuture.allOf(roll1,roll2,roll3,roll4,roll5)
                .thenRun(()->{
                    System.out.println("result::");
                    var int1 = roll1.join();
                    var int2 = roll2.join();
                    var int3 = roll3.join();
                    var int4 = roll4.join();
                    var int5 = roll5.join();

                    String result = IntStream.of(int1, int2, int3, int4, int5)
                            .boxed()
                            .map(i->i==-1? "(무효)" : String.valueOf(i))
                            .collect(Collectors.joining(", "));
                    System.out.println("result: " + result);
                }).get();
    }
}
