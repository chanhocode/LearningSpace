package ex09;

public class ShutDownButton  extends  Button{
    public ShutDownButton() {
        super("ShutDown");
    }

    @Override
    public void func() {
        System.out.println("프로그램 종료");
    }
}
