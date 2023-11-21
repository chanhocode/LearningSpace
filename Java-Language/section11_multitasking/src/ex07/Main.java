package ex07;


import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/*
* 쓰레드 풀
* - Executors & ExecutorService 사용해서 구현
* - 많은 쓰레드 작업이 필요할 때 동시에 돌아가는 쓰레드들의 개수 제한
* - 주어진 개수만큼 쓰레드들을 만든 뒤 재사용한다.
* - 쓰레드들은 쓰레드 풀이 자동으로 관리한다.
* */
public class Main {
    public static void main(String[] args) {
        ExecutorService es = Executors.newFixedThreadPool(
                // 동시에 일할 수 있는 수
                5
        );

        Cave cave = new Cave();

        while (cave.getWater() > 20) {
            // execute: Runnable을 대기열에 추가
            es.execute(new VolunteerRun(cave));
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {return;}
        }

        // shutdow: 풀 닫기 _ 이를 생략시 프로그램이 끝나지 않음
        //es.shutdown();
        //es.execute(new VolunteerRun(cave)); // 닫혔으므로 예외 발생

        // shutdownNow: 풀 닫고 투입된 지원자 해산
        List<Runnable> waitings = es.shutdownNow();
        System.out.println(waitings);
    }
}
