package ex03;

public class WrongMonthException extends Exception{
    public WrongMonthException(String message) {
        super(message);
    }
    public WrongMonthException(String message, Throwable cause) {
        super(message, cause);
    }
}
