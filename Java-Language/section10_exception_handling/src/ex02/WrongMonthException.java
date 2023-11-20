package ex02;

public class WrongMonthException extends RuntimeException{
    public WrongMonthException(int month) {
        super(
                ("%d월이 이 곳에는 없습니다.").formatted(month)
        );
    }
}
