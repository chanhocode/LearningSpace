package ex03;

import java.util.Scanner;

// 쓰레드 그룹: 연관된 쓰레드들을 묶을 수 있고 일괄적으로 다루거나 보안상 분리할 수 있다.
public class Main {
    public static void main(String[] args) {
        ThreadGroup groupA = new ThreadGroup("A");
        ThreadGroup groupB = new ThreadGroup("B");
        ThreadGroup groupBB = new ThreadGroup(groupB,"BB");
        ThreadGroup groupC = new ThreadGroup("C");

        for (var tg:new ThreadGroup[] {groupA, groupB, groupBB, groupC}) {
            for (var i = 0; i < 3; i++) {
                new Thread(tg, new PrintThread(tg.getName())).start();
            }
        }

        try(Scanner sc = new Scanner(System.in)) {
            while (sc.hasNext()) {
                String line = sc.nextLine();

                if(line.length() == 1) {
                    var groups = new ThreadGroup[] {
                            groupA, groupB, groupC
                    };
                    if("abc".contains(line)) {
                        var group = groups["abc".indexOf(line)];

                        System.out.printf("%s : %d / %d%n",
                                group.getName(),
                                group.activeCount(),
                                group.activeGroupCount());
                    }
                    if("ABC".contains(line)) {
                        var group = groups["ABC".indexOf(line)];
                        group.interrupt();
                    }
                }
                if(line.equalsIgnoreCase("quit")) break;
            }
        }

    }
}
