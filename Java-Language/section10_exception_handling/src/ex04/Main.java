package ex04;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/*
* # 예외 되던지기
* - 필요한 일은 하되, 정상적으로 진행된 것은 아님을 호출부에 알리기 위함
* - 예외를 양쪽에서 처리
* */
public class Main {
    public static void main(String[] args) {
        Map<String, Integer> dutyRegMap = new HashMap<>();
        dutyRegMap.put("Kim", 7);
        dutyRegMap.put("Han", 13);
        dutyRegMap.forEach((name, month)->{
            try {
                registerDutyMonth(name, month);
            } catch (WrongMonthException we) {
                we.printStackTrace();
                System.out.printf("%s come!!%n", name);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    // 예외를 던질 가능성이 있지만 스스로 처리하지 않는 메소드
    public static void registerDutyMonth (String name, int month) throws WrongMonthException {
        try {
            if (month < 1 || month > 12) {
                throw new WrongMonthException("랜덤 배치 하겠습니다.");
            }
            System.out.printf("%s --> %d: month. %n", name, month);
        } catch (WrongMonthException we) {
            System.out.printf("%s --> %d 배정. %n", name, new Random().nextInt(1, 12 + 1));
            throw we;
        }
    }
}
