package ex02;

public class TRun implements Runnable{
    int max;
    public TRun(int max) {this.max=max;}

    @Override
    public void run() {
        var lyric = "%s : %d -- %d";
        for(var i =0; i <max; i++) {
            try {
                Thread.sleep(2000);
                System.out.printf((lyric) + "%n", Thread.currentThread().getName(),
                        i*10, (i+1)*10);
            } catch (InterruptedException e) {
                System.out.println("ok.");
                return;
            }
        }
    }
}
