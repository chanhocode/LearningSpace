package ex11;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import static ex11.TCPserver.PORT_NO;
import static ex11.TCPserver.SERVER_IP;

public class TCPclient {
    public static String lyric = "" +
            "검푸른 파도속으로 눈물을 묻었지\n" +
            "바위산 계곡을 따라 외로움 잊었지\n" +
            "강한것은 아름다워 타오르는 태양처럼\n" +
            "강한것은 아름다워 변함없는 바위처럼\n" +
            "불타는 노을 보면서 고개를 들었지\n" +
            "눈물의 세월 모두다 저 멀리 던졌지\n" +
            "강한것은 아름다워 타오르는 태양처럼\n" +
            "강한것은 아름다워 변함없는 바위처럼\n" +
            "외인구단 외인구단 태양 이어라\n" +
            "외인구단 외인구단 바위 되어라";

    public static void main(String[] args) {
        try(
                Socket socket = new Socket(SERVER_IP, PORT_NO);

                var os = socket.getOutputStream();
                var pw = new PrintWriter(os, true);

                var is = socket.getInputStream();
                var isr = new InputStreamReader(is);
                var br = new BufferedReader(isr);
                ) {
            for (var line : lyric.split("\n")) {
                pw.println(line);
                System.out.println(br.readLine());
            }
        } catch (IOException e) {
            throw new RuntimeException();
        }
    }
}
