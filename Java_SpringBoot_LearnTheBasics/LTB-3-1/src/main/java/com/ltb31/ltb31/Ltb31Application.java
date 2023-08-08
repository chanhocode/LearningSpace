package com.ltb31.ltb31;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ltb31Application {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Ltb31Application.class);
//        app.addListeners(new SampleListener());
        app.run(args);
    }
}
