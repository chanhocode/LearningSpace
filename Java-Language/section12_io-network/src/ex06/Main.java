package ex06;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        var TYPE_PATH = "src/ex06/my_typing.txt";
        var charset = StandardCharsets.UTF_8;

        System.out.println("한 줄씩 입력하고 quit을 입력해 종료.");

        try (
                InputStreamReader ir = new InputStreamReader(System.in);
                BufferedReader br = new BufferedReader(ir);

                FileOutputStream fos = new FileOutputStream(TYPE_PATH);
                OutputStreamWriter ow = new OutputStreamWriter(fos, charset);
                BufferedWriter bw = new BufferedWriter(ow);
                ) {
            String line;
            while ((line = br.readLine()) != null) {
                if(line.equalsIgnoreCase("quit")) break;

                bw.write(line);
                bw.newLine();
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
