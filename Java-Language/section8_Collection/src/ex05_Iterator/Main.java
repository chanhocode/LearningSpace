package ex05_Iterator;

/*
* Iterator : 컬렉션을 순회하는데 사용한다.
* */

import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<Integer> intHset = new HashSet<>(
                Arrays.asList(1,2,3,4,5,6,7,8,9)
        );

        Iterator<Integer> intItor = intHset.iterator();
        // next(): 다음 요소 반환
        Integer int1 = intItor.next();
        Integer int2 = intItor.next();
        Integer int3 = intItor.next();
        // hasNext(): 순회 완료 여부 반환
        boolean hasNext = intItor.hasNext();
        // 순회 초기화
        intItor = intHset.iterator();

        // remove(): 현 위치의 요소 삭제
        while (intItor.hasNext()) {
            if (intItor.next() % 3 == 0) {
                intItor.remove();
            }
        }

    }
}
