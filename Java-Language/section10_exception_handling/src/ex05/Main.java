package ex05;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/*
* # Try with resources
* : 사용한 뒤 닫아줘야 하는 리소스 접근에 사용
* , finally 간편화
* */
public class Main {
    public static void main(String[] args) {
        var helloPath = "./src/ex05/hello.txt";
        openFile1(helloPath);

    }
    public static void openFile1 (String path) {
        try (Scanner scanner = new Scanner(new File(path))){
            while (scanner.hasNext()) {
                System.out.println(scanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.printf("%s 파일 없음%n", path);
        }
        // .close를 작성하지 않아도 자동 호출

        System.out.println("\n++++++++++++++\n");

        for (var i = 0; i < 10 ; i++) {
            dirtyOperation();
        }
    }

    public static void dirtyOperation() {
        try (SuicideSquad sc = new SuicideSquad()){
            sc.doSecretTask();
        } catch (OpFailException e) {
            e.printStackTrace();
            System.out.println("- 증거 인멸\n- - - - -\n");
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }
}
