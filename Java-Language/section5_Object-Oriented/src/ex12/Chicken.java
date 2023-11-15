package ex12;

public class Chicken implements FoodSafefy{
    @Override
    public void cleanKitchen() {
        System.out.println("매일 주방 청소");
    }

    @Override
    public void emploueeEducation() {
        System.out.println("직원 위생 교육");
    }
}
