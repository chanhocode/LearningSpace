package com.ltb32.ltb32.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class BaseConfiguration {
    @Bean
    public String hello() {
        return "hello";
    }
}
