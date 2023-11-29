package ex02.ExTarget;


import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@TargAnnot // ANNOTATION_TYPE으로 다른 어노테이션 위에 사용 가능
@Target(ElementType.CONSTRUCTOR) // 생성자 위에
public @interface TargConstr {
}
