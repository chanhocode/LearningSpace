package ex10;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

/*
* # 병렬 스트림 : 쓰레드 여럿에 분할하여 할 수 있는 작업
* - 대부분의 경우 성능이 향상된다.
* - 데이터 크기가 작거나, 순차적으로 처리되어야 하는 작업 같은 경우 느려질 수 도 있다.
* */
public class Main {
    public static void main(String[] args) {
        Stream<Character> stream1 = Stream.of('A', 'B', 'C');
        // isParallel : 스트림이 병렬인지 여부
        var bool1 = stream1.isParallel();
        // parallel: 직렬 스트림을 병렬로 바꿈
        stream1.parallel();
        var bool2 = stream1.isParallel();
        // sequential : 병렬 스트림을 직렬로 바꿈
        stream1.sequential();
        var bool3 = stream1.isParallel();

        // 병렬 스트림으로 생성하기
        Stream<Integer> stream2 = Arrays.asList(1, 2, 3, 4, 5).parallelStream();

        List<Double> dbList = new ArrayList<>(
                Arrays.asList(1.23, 2.34, 3.45)
        );
        Stream<Double> stream3 = dbList.parallelStream();
    }
}
