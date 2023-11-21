package ex06;

/*
* # Wait & notify
* Object - thread Method
* - wait: 동기화 메소드 사용 중 자기 일을 멈춘다.
* - notify: 일을 멈춘 상태의 스레드에게 자리가 비었음을 통보한다.
* - nofifyAll: 대기중인 모든 쓰레드에 통보한다.
* */

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
            PhoneBooth phoneBooth = new PhoneBooth();
            Arrays.stream("김병장,이상병,박일병,최일병".split(","))
                    .forEach(s -> new Thread(
                            new SolldierRun(s, phoneBooth)
                    ).start());
    }
}
