package ex06;

public class PhoneBooth {
    synchronized public void phoneCall(SolldierRun solider) {
        System.out.println("** %s 전화 사용중..".formatted(solider.title));

        try {Thread.sleep(500);}
        catch (InterruptedException e) {}
        System.out.println("## %s 전화 사용 완료".formatted(solider.title));

        notifyAll();
        try {
            wait();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
