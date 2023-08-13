package com.ltb38.ltb38;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Ltb38Application {

//    @CrossOrigin(origins = "http://localhost:18080")
    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    public static void main(String[] args) {
        SpringApplication.run(Ltb38Application.class, args);
    }

}
