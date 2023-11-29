package ex02.ExRetention;


import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

// 실행시에 사용 가능하다.
@Retention(RetentionPolicy.RUNTIME)
public @interface RetRuntime {
}
