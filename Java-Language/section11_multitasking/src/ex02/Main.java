package ex02;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Thread tThread = new Thread(new TRun(10));

        // 쓰레드 이름 지정
        tThread.setName("TT");
        tThread.start(); // 입력과 응답이 동시 진행 가능, run() 사용시 해당 작업이 끝나야 입력에 응답

        try(Scanner sc = new Scanner(System.in)) {
            while (sc.hasNext()) {
                var line = sc.nextLine();

                if (line.equalsIgnoreCase("check")) {
                    System.out.println("진행중?");
                    System.out.println(
                            // isAlive: 해당 쓰레드가 진행중인지 여부
                            tThread.isAlive() ? "yes" : "no"
                    );
                }

                if (line.equalsIgnoreCase("enjoy")) {
                    System.out.println("good");
                    tThread.join();
                }

                if(line.equalsIgnoreCase("stop")) {
                    System.out.println("STOP!!");
                    tThread.interrupt();
                }

                if (line.equalsIgnoreCase("quit")) break;
                System.out.println(line);
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
