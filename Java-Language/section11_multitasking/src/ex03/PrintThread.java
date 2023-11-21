package ex03;

public class PrintThread implements Runnable{
    static int lastNo = 0;
    int no;
    String groupName;

    public PrintThread(String groupName) {
        this.groupName = groupName;
        this.no = ++lastNo;
    }

    @Override
    public void run() {
        while(true) {
            try {
                Thread.sleep(3000);
                System.out.printf("[%s] %d%n", groupName, no);
            } catch (InterruptedException e) {
                System.out.printf("== %s 종료%n ==", groupName);
                return;
            }
        }
    }

}
