package ex03_Map;

import Game_example.*;

import java.util.*;

/*
* Map: Key & value의 쌍
* - Key값은 중복될 수 없다.
* */
public class Main {
    public static void main(String[] args) {
        Map<Integer, String> numNameHMap = new HashMap<>();
        // put: 요소 삽입
        numNameHMap.put(1, "홍길동");
        numNameHMap.put(2, "전우치");
        numNameHMap.put(3, "임꺽정");

        Map<Side, ArrayList<Unit>> sideUnitsHMap = new HashMap<>();
        sideUnitsHMap.put(
                Side.BLUE,
                new ArrayList<>(
                        Arrays.asList(
                                new Swordman(Side.BLUE),
                                new Knight(Side.BLUE),
                                new MagicKnight(Side.BLUE)
                        )
                )
        );
        sideUnitsHMap.put(
                Side.RED,
                new ArrayList<>(
                        Arrays.asList(
                                new Swordman(Side.RED),
                                new Knight(Side.RED),
                                new MagicKnight(Side.RED)
                        )
                )
        );

        // putAll: 대상 맵으로부터 전부 가져온다.
        Map<Integer, String> numNameHMapClone = new HashMap<>();
        numNameHMapClone.putAll(numNameHMap);

        // get: 키를 통한 접근, 잘못된 키 입력시 null 반환함
        String no2 = numNameHMap.get(2);
        // keySet: 키들의 Set 반환
        Set<Integer> numSet = numNameHMap.keySet();
        // containsKey/containsValue: 포함 여부 반환
        boolean contains1 = numNameHMap.containsKey(1);

        // getOrDefault: 키에 해당하는 쌍이 없을 시 지정한 디폴트 값 반환
        String defName = numNameHMap.getOrDefault(10, "대신맨");

        // remove: (key)-> 주어진 key를 통한 제거 (key, value)-> 주어진 key, value 쌍이 있다면 제거
        numNameHMap.remove(1);
        // isEmpty: 비어있는지 확인
        boolean isEmpty1 = numNameHMap.isEmpty();
        // clear: 모두 제거
        numNameHMap.clear();
        boolean isEmpty2 = numNameHMap.isEmpty();

        // 트리맵 _ 정렬이 무관하고 빠른 접근이 필요시 해시맵, 키순으로 정렬 필요시 트리맵 사용
        TreeMap<Integer, String[]> classKidsTMap = new TreeMap<>();
        classKidsTMap.put(3, new String[] {"서아", "이준", "아린"});
        classKidsTMap.put(9, new String[] {"하윤", "서준", "지호"});
        classKidsTMap.put(1, new String[] {"이서", "하준", "아윤"});
        classKidsTMap.put(7, new String[] {"지안", "은우", "예준"});
        classKidsTMap.put(5, new String[] {"서윤", "시우", "하은"});

        int firstKey = classKidsTMap.firstKey();
        int lastKey = classKidsTMap.lastKey();

        Map.Entry<Integer, String[]> firstEntry = classKidsTMap.firstEntry();
        Map.Entry<Integer, String[]> lastEntry = classKidsTMap.lastEntry();

        int ceil4 = classKidsTMap.ceilingKey(4);
        Map.Entry<Integer, String[]> floor4 = classKidsTMap.floorEntry(4);

        Map.Entry<Integer, String[]> pollF1 = classKidsTMap.pollFirstEntry();
        Map.Entry<Integer, String[]> pollF2 = classKidsTMap.pollFirstEntry();
        Map.Entry<Integer, String[]> pollL1 = classKidsTMap.pollLastEntry();
        Map.Entry<Integer, String[]> pollL2 = classKidsTMap.pollLastEntry();
    }
}
