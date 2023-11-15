package ex12;

public interface FoodSafefy {
    static void announcement() {
        System.out.println("식품안전 관련 공지");
    }
    default void regularInspection() {
        System.out.println("정기 체크");
    }
    void cleanKitchen();
    void emploueeEducation();
}
