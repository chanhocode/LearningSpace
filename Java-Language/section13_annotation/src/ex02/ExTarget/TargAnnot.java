package ex02.ExTarget;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/*
* @Targegt: 어노테이션이 적용될 수 있는 대상 지정
* - ANNOTATION_TYPE : 다른 어노테이션
* - CONSTRUCTOR : 생성자
* - FIELD : 필드
* - LOCAL_VARIABLE : 지역 변수
* - METHOD : 메소드
* - PACKAGE : 패키지
* - PARAMETER : 매개변수
* - TYPE : 클래스, 인터페이스, enum 등의 타입
* */

// Target: 어노테이션이 적용될 수 있는 대상 지정
// ANNOTATION_TYPE : 다른 어노테이션
@Target(ElementType.ANNOTATION_TYPE)
public @interface TargAnnot {
}
