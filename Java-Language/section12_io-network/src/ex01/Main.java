package ex01;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

/*
* NIO2
* +) Paths class: 파일 시스템 경로를 인스턴스화한 Path 객체 생성
* */
public class Main {
    public static final String CUR_PATH = "src/ex01";
    public static void main(String[] args) {
        // 프로젝트 폴더 경로
        Path path1 = Paths.get("");
        Path paht1Abs = path1.toAbsolutePath();

        Path path2 = Paths.get("my_file.txt");
        Path path2Abs = path2.toAbsolutePath();

        // 인자로 들어온 문자열을 각각 내부 폴더로
        Path path3 = Paths.get(CUR_PATH, "sub1", "sub2", "sub3");
        // 두 경로를 통합
        Path path4 = path3.resolve(path2);
        // 부모 경로
        Path path5 = path4.getParent();
        // 한 경로에서 다른 경로로의 상대 경로
        Path path6 = path4.relativize(path2);
        // 끝단 파일/ 폴더명
        Path path7 = path4.getFileName();
        // 서브경로
        Path path8 = path4.subpath(3, 5);

        // File class: 파일을 조작하는 다양하고 편리한 기능들을 제공
        System.out.println(Files.exists(path2));
        // Path 기준으로 파일생성
        try {
            Files.createFile(path2);
        } catch (IOException e) {
            System.out.println("파일이 이미 있음");
        }
        System.out.println(Files.exists(path2));

        // Path 기준으로 폴더생성
        try {
            Files.createDirectory(
                    Paths.get(CUR_PATH, "myFolder")
            );
        } catch (IOException e) {
            System.out.println("폴더가 이미 있음");
        }

        // 중첩된 폴더 한 번에 생성
        try {
            Files.createDirectories(
                    path4.getParent()
            );
            // 폴더들을 미리 만들고 그곳에 파일 생성
            Files.createFile(path4);
        } catch (IOException e) {
            System.out.println("이미 있음");
        }

        // Files를 사용하여 파일 쓰기
        // write: 파일에 주어진 바이트 배열을 씀
        try {
            // getBytes: 문자열로부터, 주어진 인코딩 형식에 따라 바이트 배열로 반환
            Files.write(path4, "안녕하세요".getBytes(StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        // List 받아 줄 별로 쓰기
        List<String> lines = Arrays.asList(
                "아기상어 뚜루루뚜루", "귀여운 뚜루루뚜루",
                "바다속 뚜루루뚜루",  "아기상어",
                "",
                "엄마상어 뚜루루뚜루", "어여쁜 뚜루루뚜루",
                "바다속 뚜루루뚜루",  "엄마상어"
        );
        try {
            Files.write(path4, lines);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        // 파일의 내용을 byte 배열로 전부 받아오기
        byte[] path4Bytes;
        try {
            path4Bytes = Files.readAllBytes(path4);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        String path4Contents = new String(path4Bytes);
        System.out.println(path4Contents);

        System.out.println("\n==============\n");

        // 파일의 내용을 문자열의 리스트로 전부 받아오기
        List<String> path4Read = null;
        try {
            path4Read = Files.readAllLines(path4);
            path4Read.stream()
                    .map(s ->"+" + s)
                    .forEach(System.out::println);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println("\n==============\n");

        // 파일의 내용을 한 줄씩 스트림으로 받아오기
        try (Stream<String> lineStrm = Files.lines(path4)) {
            lineStrm
                    .map(s->"*"+s)
                    .forEach(System.out::println);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        Path copied = Paths.get(
                path4.getParent().toString(), "coopied.txt"
        );
        // 파일 복사하기
        try {
            Files.copy(path4, copied);
        } catch (IOException e) {}

        // 파일 이동하기
        Path moved = Paths.get(
                path4.getParent().getParent().toString(),
                "moved.txt"
        );
        try {
            Files.move(copied, moved);
        } catch (IOException e) {
            System.out.println("파일이 이미 있음");
        }
        // 파일 삭제하기
        try {
            Files.delete(moved);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
