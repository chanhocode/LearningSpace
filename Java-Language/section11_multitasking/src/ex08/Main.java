package ex08;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        // TryCallable
        /*
        List<Integer> intList = new ArrayList<>();
        IntStream.range(0, 10).forEach(i->{
            try {
                intList.add(new RollDiceCall().call());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
        System.out.println(String.join(
                ",",
                intList.stream().map(String::valueOf).toArray(String[]::new)
        ));
        */

        // Future : 비동기적 연산의 결과, 비동기 작업 후 get 메소드로 최종값을 받아옴
        /*
        ExecutorService es = Executors.newSingleThreadExecutor();
        // submit: Callable을 받아 Future 반환
        Future<String> callAnswer = es.submit(()->{
            Thread.sleep(2000);
            return "여보세요";
        });
        // get 메소드를 호출하기 전까지 막히지 않고 동시 진행
        // isDone: 퓨처의 태스크가 종료되었는지 여부 확인
        while(!callAnswer.isDone()) {
            System.out.println("따르릉...");
            try {
                Thread.sleep(400);
            } catch (InterruptedException e) {}
        }

        String result = null;
        // get: 해당 퓨처 쓰레드의 작업이 끝난 뒤 결과를 받아옴, 이를 완료하기까지 그 뒤의 작업들이 막힘(블로킹)
        try {
            result = callAnswer.get();
        } catch (InterruptedException | ExecutionException e) {}

        System.out.println("통화시작 - " + result);
        System.out.println("---작업종료---");

        es.shutdown();
         */

        // 쓰레드 풀과 Future를 사용해서 여러 Callable 동시 실행
        ExecutorService es = Executors.newFixedThreadPool(4);
        List<Future<Integer>> futlist = new ArrayList<>();
        IntStream.range(0,10).forEach(i -> {
            futlist.add(
                    es.submit(new RollDiceCall())
            );
        });

        es.shutdown();

        ArrayList<Integer> intList = new ArrayList<>();
        for(Future<Integer> future : futlist) {
            try {
                intList.add(future.get());
            } catch(InterruptedException | ExecutionException e) {}
        }
        System.out.println(String.join(
                ",",
                intList.stream().map(String::valueOf).toArray(String[]::new)
        ));
    }
}
