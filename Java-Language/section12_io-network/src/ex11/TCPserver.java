package ex11;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPserver {
    public static final String SERVER_IP = "127.0.0.1";
    public static final int PORT_NO = 1234;

    public static void main(String[] args) {
        try(
                ServerSocket serverSkt = new ServerSocket(PORT_NO)
                ) {
            while(true) {
                try(
                        // 클라이언트로부터 요청이 오면 반환되는 소켓
                        Socket clientSkt = serverSkt.accept();

                        var is = clientSkt.getInputStream();
                        var isr = new InputStreamReader(is);
                        var br = new BufferedReader(isr);
                        var sw = new StringWriter();
                        var piw = new PrintWriter(sw);

                        var os = clientSkt.getOutputStream();
                        // 두 번째 인자는 autoflush: 값이 프린트 될때 마다 출력 여부
                        var pow = new PrintWriter(os, true)
                        ) {
                    String line;
                    int lineCount = 1;
                    while ((line = br.readLine()) != null) {
                        piw.printf(
                                "%3d : %s%n".formatted(
                                        lineCount++, line
                                )
                        );
                        pow.printf("수신: %s... 등 %d자%n".formatted(
                                line.substring(
                                        0, Math.min(3, line.length())
                                ), line.length()
                        ));
                    }
                    System.out.println(sw);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
