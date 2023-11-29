package ex02.ExTarget;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target(ElementType.FIELD) // 필드 위에 사용 가능
public @interface TargField {
}
