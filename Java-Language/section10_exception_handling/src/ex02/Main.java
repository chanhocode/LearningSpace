package ex02;
// 예외 정의하고 발생시키기
public class Main {
    public static void main(String[] args) {
        //registerDutyMonth("Kim", 7);
        //registerDutyMonth("Han", 13);

        System.out.println("\n=====================\n");

        try {
            registerDutyMonth("Kim", 13);
        } catch (WrongMonthException we) {
            we.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("\n=====================\n");


    }
    // 예외 던지기
    public static void registerDutyMonth(String name, int month) {
        if(month < 1 || month > 12) {
            // (1)
 /*           throw new IndexOutOfBoundsException(
                    "1년은 12 개월 입니다."
            );*/
            // (2)
            throw new WrongMonthException(month);
        }
        System.out.printf("%s -> %d:month.%n", name, month);
    }
}
