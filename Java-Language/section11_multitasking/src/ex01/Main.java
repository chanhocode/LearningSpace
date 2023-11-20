package ex01;

/*
* # 쓰레드 만들기
* - Thread 클래스 상속
* - Runnable 인터페이스 구현 ( 주로 사용 )
* */
public class Main {
    public static void main(String[] args) {
        Thread thread1 = new Thread1(); // 상속시
        Thread thread2 = new Thread(new MyRunnable()); // 인터페이스 구현시

        // 람다 사용
        Thread thread3 = new Thread(()->{
           for(var i = 0; i< 20; i++) {
               try {
                   Thread.sleep(200);
               } catch (InterruptedException e) {
                   throw new RuntimeException(e);
               }
               System.out.print(3);
           }
        });

        // 해당 쓰레드에 지정된 run메서드 사용시 현재 메인 쓰레드에서 사용하므로 의미 없음
        // thread1.run() ...

        // 각각 새로운 쓰레드를 생성하여 동시에 진행하기 위해 start 사용
        thread1.start();
        thread2.start();
        thread3.start();

        for(var i = 0; i< 20; i++) {
            System.out.print('M');
        }
    }
}
