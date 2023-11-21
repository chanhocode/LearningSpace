package ex08;

import java.util.Random;
import java.util.concurrent.Callable;

public class RollDiceCall implements Callable<Integer> {
    // Callabler과 Runnable 차이: 1) 값을 반환한다. 2) Exception 던짐

    @Override
    public Integer call() throws Exception {
        Thread.sleep(1000);
        var result = new Random().nextInt(0, 6) + 1;
        System.out.println(result);
        return result;
    }
}
