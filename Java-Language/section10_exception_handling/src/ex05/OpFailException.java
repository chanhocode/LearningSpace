package ex05;

public class OpFailException extends Exception{
    public OpFailException() {
        super("- 작전 실패");
    }
}
