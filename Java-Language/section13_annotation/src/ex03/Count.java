package ex03;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface Count {
    int value() default 1; // 기본값 설정, 없어도 됨.
}
