package ex02;

import ex02.ExRetention.RetClass;
import ex02.ExRetention.RetRuntime;
import ex02.ExRetention.RetSource;
import ex02.ExTarget.TargConstr;
import ex02.ExTarget.TargField;
import ex02.ExTarget.TargMulti;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.stream.Collectors;

public class MyClass {

    @TargConstr // 생성자 위에 사용 가능 어노테이션
    public MyClass() {}

    @TargField
    @TargMulti
    int targField;

    @TargMulti
    public void targMethod () {}

    @RetSource
    int retSource;

    @RetClass
    int retClass;

    @RetRuntime
    int retRuntime;
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> myClass = Class.forName("ex02.MyClass");
        for (Field f : myClass.getDeclaredFields()) {
            if(f.getAnnotations().length>0) {
                System.out.printf("%s : %s%n",
                        f.getName(),
                        Arrays.stream(f.getAnnotations()).map(Annotation::toString)
                                .collect(Collectors.joining(",")));
            }
        }
    }
}
