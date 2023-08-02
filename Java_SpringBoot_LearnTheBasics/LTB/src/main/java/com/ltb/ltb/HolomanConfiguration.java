package com.ltb.ltb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


// holoman 이라는 Bean을 리턴하는 설정파일
@Configuration
public class HolomanConfiguration {
    @Bean
    public Holoman holoman() {
        Holoman holoman = new Holoman();
        holoman.setHowLong(5);
        holoman.setName("Chanho");
        return holoman;
    }
}
