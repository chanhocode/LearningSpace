package com.ltb32.ltb32;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@SpringBootApplication
@EnableConfigurationProperties(ChanhoProperties.class)
public class Ltb32Application {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Ltb32Application.class);
        app.setWebApplicationType(WebApplicationType.NONE);
        app.run(args);
    }

}
