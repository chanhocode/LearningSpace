package ex02.ExRetention;


import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

// 소스파일에만 적용 ex) @Override
@Retention(RetentionPolicy.SOURCE)
public @interface RetSource { }
