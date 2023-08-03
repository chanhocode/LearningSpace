package com.ltb.ltb;

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


// holoman 이라는 Bean을 리턴하는 설정파일
@Configuration
@EnableConfigurationProperties(HolomanProperties.class)
public class HolomanConfiguration {
    // EnableAutoConfiguration 우선 문제 해결
    // @ConditionalOnMissingBean 추가
    @Bean
    @ConditionalOnMissingBean
    public Holoman holoman(HolomanProperties properties) {
        Holoman holoman = new Holoman();
        holoman.setHowLong(properties.getHowLong());
        holoman.setName(properties.getName());
        return holoman;
    }
}
