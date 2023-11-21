package ex06;

public class SolldierRun implements Runnable{
    String title;
    PhoneBooth phoneBooth;

    public SolldierRun(String title, PhoneBooth phoneBooth) {
        this.title = title;
        this.phoneBooth = phoneBooth;
    }
    @Override
    public void run() {
        while(true) {
            phoneBooth.phoneCall(this);
        }
    }
}
