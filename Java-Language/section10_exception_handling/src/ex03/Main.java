package ex03;

import java.util.HashMap;
import java.util.Map;

// 예외를 메소드 외부로 떠넘기기
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
    public static void registerDutyMonth (String name, int month) throws  WrongMonthException {
        if (month < 1 || month > 12) {
            throw new WrongMonthException("다른 월로 신청하세요.");
        }
        System.out.printf("%s --> %d: month. %n", name, month);
    }
}
