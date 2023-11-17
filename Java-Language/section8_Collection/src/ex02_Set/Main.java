package ex02_Set;

/*
* Set : 중복되지 않는 요소들의 집합
* * HashSet
* - 성능이 빠르고 메모리 적게사용 _ 순서 관련 기능 없음
* - 동일한 입력 값, 값마다 고유한 정수값을 해시값으로 저장하여 정렬
* - but, 일정 개수 넘어가면 재조정 하므로 정렬을 목적으로 사용하지 말 것
* * LinkedHashSet
* - 요소들을 입력 순서대로 정렬 _ HashSet보다 성능 낮음
* * TreeSet
* - 요소들을 특정 기준대로 정렬(default: 오름차순) _ 요소 추가/삭제 성는 낮음
* */

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Integer> intHset1 = new HashSet<>();
        intHset1.add(1);
        intHset1.add(1);
        intHset1.add(2);
        intHset1.add(3);
        List<Integer> ints1 = new ArrayList<>(
                Arrays.asList(1,1,2,2,3,3,4,5,6,7)
        );
        Set<Integer> intHset2 = new HashSet<>(ints1);
        // for-each 사용
        for(var i:intHset1) {
            System.out.println(i);
        }
        // 응용: 중복을 제거한 ArrayList
        ints1.clear();
        ints1.addAll(intHset2);

        // -> HashSet
        // 포함 여부
        boolean has2 = intHset1.contains(2);
        // 요소 제거, 여부 반환
        boolean rm3 = intHset1.remove(3);
        boolean rm4 = intHset1.remove(4);
        // 다른 컬렉션을 기준으로 내용 제거
        intHset2.removeAll(intHset1);
        // size, isEmpty, clear 실습
        System.out.println("size: " + intHset2.size());
        System.out.println("isEmpty: " + intHset2.isEmpty());
        intHset1.clear();

        TreeSet<Integer> intTreeSet = new TreeSet<>();
        for (int i : new int[] { 3, 1, 8, 5, 4, 7, 2, 9, 6}) {
            intTreeSet.add(i);
        }
        // Red-Black Tree
        int firstInt = intTreeSet.first();
        int lastInt = intTreeSet.last();
        // ceiling(): 같은 것이 없다면 트리구조상 바로 위의 것 반환
        // floor(): 같은 것이 없다면 트리구조상 바로 아래의 것 반환
        // 맨 앞/뒤 제거
        int pollFirst1 = intTreeSet.pollFirst();
        int pollLast1 = intTreeSet.pollLast();
    }
}
