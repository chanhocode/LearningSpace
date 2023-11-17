package ex01_List;

import Game_example.*;

import java.util.*;

/*
* ArrayList
* - 배열과 달리 크기가 동적 증가
* 장점: 각 요소들의 접근이 빠르다.
* 단점: 요소 추가 및 제거시 성능이 안좋다.
* 즉, 변경이 드물고 빠른 접근 필요시 사용
*
* LinkedList
* - Queue를 구현하는 용도로 사용가능
* - 각각 이전/다음 요소들로의 링크를 가짐
* 장점: 요소의 추가와 제거가 빠름
* 단점: 요소에 대한 접근이 느림
* 즉, 요소들의 추가/제거가 많은 프로그램에 적합하다.
* */

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> ints1 = new ArrayList<>();
        ArrayList<String> strings = new ArrayList<>();
        ArrayList<Number> numbers = new ArrayList<>();
        ArrayList<Knight> knights = new ArrayList<>();

        // List: add를 사용해 요소 추가
        ints1.add(11);
        ints1.add(22);
        ints1.add(33);
        ints1.add(44);
        ints1.add(55);

        // List: 요소 중복 가능
        for (var str:"바니 바니 바니 바니 당근 당근".split(" ")) {
            strings.add(str);
        }

        // for-each 사용
        for (int i : ints1) {
            System.out.println(i);
        }

        // ArrayList 메서드
        // size(): 요소 개수 반환
        int ints1Size = ints1.size();
        // isEmpty(): size가 0인지 여부 반환
        boolean intsIsEmpty = ints1.isEmpty();
        // get(): 인덱스로 요소 접근
        int ints12nd = ints1.get(1);
        // contains(): 포함 여부 반환
        boolean ints1Con3 = ints1.contains(33);
        // set(): 위치의 요소 수정
        ints1.set(2, 444);
        // add(): 위치에 요소 추가(다음 요소를 밀어내며)
        ints1.add(0, 11);

        // ArrayList 생성 및 초기화
        ArrayList<Integer> ints2A = new ArrayList<>(
                Arrays.asList(1, 2, 3, 4, 5)
        );
        ArrayList<Integer> ints2B = new ArrayList<>(
                List.of(1, 2, 3, 4, 5)
        );
        ArrayList<Integer> ints2C = new ArrayList<>();
        Collections.addAll(ints2C, 1, 2, 3, 4, 5);
        // -> 다른 Collection 인스턴스를 사용하여 생성
        ArrayList<Integer> ints3 = new ArrayList<>(ints1);
        // 얕은 복사
        ArrayList<Integer> ints4 = (ArrayList<Integer>) ints3.clone();

        // remove()
        // 1) 인덱스로 지우기
        ints3.remove(4);
        // 2) 요소로 지우기
        ints3.remove((Integer) 55);

        // 컬렉션 이어붙이기
        ints1.addAll(ints3);

        // toArray: Object 배열 반환
        Object[] intsAry2_Obj = ints1.toArray();

        // 특정 타입의 배열로 변환: 인자로 해당 타입 배열의 생성자를 넣어주다.
        Integer[] ints1Ary2 = ints1.toArray(Integer[]::new);

        // 리스트 비우기
        ints1.clear();


        // LinkedList
        LinkedList<Integer> intNums = new LinkedList<>();
        for(var intNum: new int[] {2,3,4}) { intNums.add(intNum); };

        // 앞에 추가
        intNums.addFirst(1);
        // 뒤에 추가
        intNums.addLast(5);

        // 요소 반환
        // peek: 비어있을 경우 null반환
        int peekedFirst = intNums.peekFirst();
        int peekedLast = intNums.peekLast();
        // get: 비어있을 경우 익셉션
        int gottenFirst = intNums.getFirst();
        int gottenLast = intNums.getLast();

        // Stack 구현
        LinkedList<Character> charLList = new LinkedList<>();
        charLList.push('A');
        charLList.push('B');
        charLList.push('C');
        charLList.push('D');
        charLList.push('E');

        char pop1 = charLList.pop();
        char pop2 = charLList.pop();
        char pop3 = charLList.pop();
    }
}
