package com.ltbmain.ltbmain;

import com.ltb.ltb.Holoman;
import com.ltb.ltb.HolomanProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

// 동일
//@SpringBootConfiguration
//@ComponentScan ( 어노테이션이 있는 시점의 클래스부터 하위 패키지 까지 전부 확인해서 _ @Component @Configuration @Repository @Service @Controller @RestController _ 찾아서 빈으로 등록 )
// ? Bean: Spring 컨테이너가 관리하는 자바 객체를 말한다.
//@EnableAutoConfiguration ( 기본 설정 )
@SpringBootApplication
public class LtbMainApplication {

    public static void main(String[] args) {
        // @EnableAutoConfiguration 어노테이션 없이 실행 시킬수 있다.
		SpringApplication application = new SpringApplication(LtbMainApplication.class);
		application.setWebApplicationType(WebApplicationType.NONE);
		application.run(args);
    }

	// (기존) 무시 (내가 등록한 빈 보다 EnableAutoConfiguration 우선시 됨)
	// 해결: HolomanConfiguration에 @ConditionalOnMissingBean 추가
//	@Bean
//	public Holoman holoman() {
//		Holoman holoman = new Holoman();
//		holoman.setName("Jo");
//		holoman.setHowLong(10);
//		return holoman;
//	}
}

