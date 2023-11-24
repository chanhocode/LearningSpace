package ex02;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

/*
* I/O Stream
* : 데이터 입출력을 다루는 클래스
* - 데이터를 한 쪽에서 다른 쪽으로 전달하는 것을 흐름 Stream이라 본다
* */
public class Main {
    public static final String SONG_PATH = "src/ex02/beatles.txt";

    public static String measureTime (Runnable runnable) {
        long startTime = System.nanoTime();
        runnable.run();
        long endTime = System.nanoTime();
        return String.valueOf("%,d 나노초").formatted(endTime - startTime);
    }

    public static void main(String[] args) {
        var fis1 = measureTime(Main::fileInputStrmEx1);
        var fis2 = measureTime(Main::fileInputStrmEx2);
        var fis3 = measureTime(Main::fileInputStrmEx3);
        var bis = measureTime(Main::bufferedInputEx);

    }

    public static void fileInputStrmEx1 () {
        // FileInputStream: InputStream으로부터 상속
        // - 파일로부터 데이터를 받아오는데 사용
        // - try-with-resources로 스트림 열고 닫음
        try(FileInputStream fis = new FileInputStream(SONG_PATH)) {
            int readByte;
            // read: file로부터 1byte 씩 읽어옴. 없을 시 -1 반환
            while((readByte = fis.read()) != -1) {
                char readChar = (char) readByte;
                System.out.print(readChar);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void fileInputStrmEx2() {
        // 인코딩 설정
        Charset charset = StandardCharsets.UTF_8;

        try(
                FileInputStream fis = new FileInputStream(SONG_PATH);
                // InputStreamReader: 바이트 스트림을 문자열 스트림으로, 인코딩 적용 등에 사용
                InputStreamReader isr = new InputStreamReader(fis, charset)
                ) {
            int readByte;
            while ((readByte = isr.read()) != -1) {
                char readChar = (char) readByte;
                System.out.print(readChar);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void fileInputStrmEx3() {
        // 버퍼 사용
        byte[] buffer = new byte[1024];
        Charset charset = StandardCharsets.UTF_8;

        try(FileInputStream fis = new FileInputStream(SONG_PATH)) {
            int readByte;
            int count = 0;

            while((readByte = fis.read(buffer)) != -1) {
                // byte[] 로부터 지정된 범위와 인코딩의 문자열 생성
                String readStr = new String(
                        buffer, 0, readByte, charset
                );
                System.out.printf("\n- - - %d : %d - - - \n%n",
                        ++count, readByte);
                System.out.println(readStr);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void bufferedInputEx() {
        Charset charset = StandardCharsets.UTF_8;
        try (
            // BufferedInputStream: 내부에 버퍼를가짐 (기본 8192 바이트)
            BufferedInputStream bis = new BufferedInputStream(
                    new FileInputStream(SONG_PATH),
                    4096
            )
        ) {
            byte[] buffer = new byte[1024];
            int readByte;
            int count = 0;

            // FileInputStream의 read 메소드와의 차이
            // - 내부 버퍼으로부터 가져오므로 더 빠름
            // - 바구니 크기보다 적게 남았을 때 그 만큼만 받아옴
            while ((readByte = bis.read(buffer)) != -1) {
                String readStr = new String(
                        buffer, 0, readByte, charset
                );
                System.out.printf("\n- - - %d : %d - - -\n%n", ++count, readByte);
                System.out.println(readStr);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
