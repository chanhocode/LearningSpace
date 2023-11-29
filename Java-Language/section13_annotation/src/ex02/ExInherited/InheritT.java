package ex02.ExInherited;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

// @Inherited: 클래스에 사용될 시 자식 클래스도 이를 물려받음
@Inherited
@Retention(RetentionPolicy.RUNTIME)
public @interface InheritT {
}
