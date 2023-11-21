package ex04;

// 데몬 쓰레드: 주 쓰레드 작업이 끝나면 자동 종료
public class Main {
    public static void main(String[] args) {
        Runnable rythmRun = () -> {
            var index = 0;
            var rythm = "쿵쿵짝";
            while (true) {
                System.out.print(rythm.charAt(index++) + " ");
                index %= rythm.length();
                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        };

        Thread SingThread = new Thread(()->{
            var lines = new String[] {
                    "푸른하늘 은하수", "하얀 쪽배엔",
                    "계수나무 한나무", "토끼 세마리",
                    "한마리는 구워먹고", "한마리는 튀겨먹고",
                    "한마리는 도망간다", "서쪽나라로"
            };

            Thread rythmThread = new Thread(rythmRun);
            rythmThread.setDaemon(true);
            rythmThread.start();

            for (var i = 0; i < lines.length; i++) {
                System.out.println("\n" + lines[i]);
                try {
                    Thread.sleep(1200);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });
        SingThread.start();
    }
}
