package ex02.ExRetention;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

// 클래스 파일에만 적용된다 (기본). 실행시에는 사용이 불가하고 컴파일 타임에 읽힐 목적으로 사용
@Retention(RetentionPolicy.CLASS)
public @interface RetClass {
}
