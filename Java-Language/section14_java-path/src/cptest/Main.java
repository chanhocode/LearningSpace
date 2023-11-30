package cptest;

public class Main {
    public static void main(String[] args) {
        System.out.println(new Hello().sayHello());
    }
}

// 1) [/src] Terminal: $ javac cptest/Main.java
// 2) [/section14_java-path] : $javac src/cptest/Main.java <- error

// # 소스패스 사용
// 3) [/section14_java-path] : $javac -sourcepath src src/cptest/Main.java

// # 원하는 폴더에 컴파일 하기 [ -d ]
// compiled라는 폴더를 만들고 그곳에 컴파일 하기
// 4) $ javac -d compiled -sourcepath src src/cptest/Main.java