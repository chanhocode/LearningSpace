package ex03;

import java.util.*;
import java.util.stream.*;

/**
 * Stream: 연속되는 요소들의 흐름
 * - 배열, 콜렉션, 파일 등에서 만들어질 수 있음
 * - 원본을 수정하지 않는다.
 */
public class Main {
    public static void main(String[] args) {
        List<Integer> int0To9 = new ArrayList<>(
                Arrays.asList(5,2,0,8,4,1,7,9,3,6)
        );
        // 홀수만 골라내어 정렬
        var oddsStrStreamed = int0To9
                .stream()
                .filter(i -> i%2 ==1)
                .sorted(Integer::compare)
                .map(String::valueOf)
                .collect(Collectors.joining(", "));

        // 원시값을 통한 스트림 생성
        Integer[] integerAry = {1, 3, 4, 5, 5};
        Stream<Integer> fromArray = Arrays.stream(integerAry);
        var fromArray_Arr = fromArray.toArray();

        // 직접 생성
        IntStream withInts = IntStream.of(1, 2, 3, 4,5);
        Stream<Integer> withIntegers = Stream.of(1, 2, 3, 4, 5);

        // 맵의 경우 엔트리의 스트림으로 생성
        Map<String, Character> subjectGradeHM = new HashMap<>();
        subjectGradeHM.put("English", 'B');
        subjectGradeHM.put("Math", 'C');
        subjectGradeHM.put("Programming", 'A');
        var fromHashMap_Arr = subjectGradeHM.entrySet().stream().toArray();

        // 빌더로 생성
        Stream.Builder<Character> builder = Stream.builder();
        builder.accept('스');
        builder.accept('트');
        builder.accept('림');
        builder.accept('빌');
        builder.accept('더');
        Stream<Character> withBuilder = builder.build();
        var withBuilder_Arr = withBuilder.toArray();

        //  concat 메서드로 생성
        Stream<Integer> toConcat1 = Stream.of(11, 22, 33);
        Stream<Integer> toConcat2 = Stream.of(44, 55, 66);
        Stream<Integer> withConcatMethod = Stream.concat(toConcat1, toConcat2);
        var withConcatMethod_Arr = withConcatMethod.toArray();

        // 이터레이터(인자: 초기값, 다음 값을 구하는 람다)로 생성: limit로 횟수를 지정해야함
        Stream<Integer> withIter1 = Stream
                .iterate(0, i -> i+ 2)
                .limit(10);
        var withIter1_Arr = withIter1.toArray();

        // 원시 자료형 스트림의 기능들로 생성
        IntStream fromRange1 = IntStream.range(10, 20); // 20 미포함
        IntStream fromRange2 = IntStream.rangeClosed(10, 20); // 포함
        Stream<Integer> fromRangeBox = fromRange1.boxed();
        var fromRangeBox_Arr = fromRangeBox.toArray();



    }

}
