package ex02.Repeatable;

public class My {
    public static void main(String[] args) {
        @RepeatF(a=1, b=2)
        // @RepeatF(a=1, b=2) <- 중복 불가
        @RepeatT(a = 1, b =6)
        @RepeatT(a = 2, b =5)
        @RepeatT(a = 3, b =4)
        boolean repeat;
    }
}
