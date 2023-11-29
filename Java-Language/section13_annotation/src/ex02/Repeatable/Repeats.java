package ex02.Repeatable;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

// 중복 사용될 어노테이션을 묶어주는 역할
@Retention(RetentionPolicy.RUNTIME)
public @interface Repeats {
    RepeatT[] value();
}
