package ex02.ExInherited;

import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.stream.Collectors;

public class Sub extends My {
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> mySubclass = Class.forName("ex02.ExInherited.Sub");
        System.out.println(
                "Sub의 어노테이션 : " +
                        Arrays.stream(mySubclass
                                        .getAnnotations())
                                .map(Annotation::toString)
                                .collect(Collectors.joining(","))
        );
    }
}
