package ex08;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

public class Main {
    public static void main(String[] args) {
        System.out.println(System.out.getClass());

        String PRINT_PATH = "src/ex08/print.txt";
        PrintStream ps = null;
        FileOutputStream fos = null;

        try {
            fos = new FileOutputStream(PRINT_PATH);
            ps = new PrintStream(fos);
            System.setOut(ps);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        System.out.println("안녕하세요!");
        System.out.println("텍스트 파일에서 확인");
    }
}
