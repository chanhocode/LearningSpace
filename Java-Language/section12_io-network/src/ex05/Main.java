package ex05;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class Main {
    public static final String SONG_PATH = "src/ex02/beatles.txt";
    public static void main(String[] args) {
        fileReaderWriterEx();
        bufferedReaderWriterEx();
        ioStreamReaderWriterEx();
    }
    public static void fileReaderWriterEx() {
        Charset charset = StandardCharsets.UTF_8;
        try (
                FileReader fr = new FileReader(
                        SONG_PATH, charset
                );
                FileWriter fw = new FileWriter(
                        SONG_PATH.replace("beatles", "beatles_1"),
                        charset
                );
                )
        {
            int c;
            // 한 글자씩 불러오고 출력 후 쓰기, 비효율적
            while((c=fr.read()) != -1) {
                System.out.print((char) c);
                fw.write(c);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void bufferedReaderWriterEx() {
        Charset charset = StandardCharsets.UTF_8;

        try (
                FileReader fr = new FileReader(SONG_PATH, charset);
                BufferedReader br = new BufferedReader(fr);
                FileWriter fw = new FileWriter(
                        SONG_PATH.replace("beatles", "beatles_2"), charset
                );
                BufferedWriter bw = new BufferedWriter(fw);
        ) {
            String line;
            // 한 줄씩
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                bw.write(line);
                bw.newLine(); // 줄 바꾸기
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void ioStreamReaderWriterEx() {
        Charset charset = StandardCharsets.UTF_8;
        try (
                FileInputStream fis = new FileInputStream(SONG_PATH);
                InputStreamReader ir = new InputStreamReader(fis, charset);
                BufferedReader br = new BufferedReader(ir);
                FileOutputStream fos = new FileOutputStream(
                        SONG_PATH.replace("beatles", "beatles_3")
                );
                OutputStreamWriter ow = new OutputStreamWriter(fos, charset);
                BufferedWriter bw = new BufferedWriter(ow);
                )
        {
            String line;

            while ((line = br.readLine()) != null) {
                System.out.println(line);
                bw.write(line);
                bw.newLine();
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
