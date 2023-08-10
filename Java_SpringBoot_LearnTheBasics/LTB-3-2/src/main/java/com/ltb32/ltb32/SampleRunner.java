package com.ltb32.ltb32;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleRunner implements ApplicationRunner {

    private Logger logger = LoggerFactory.getLogger(SampleRunner.class);

//    @Value("${chanho.name}")
//    private String name;
//    @Value("${chanho.age}")
//    private int age;
//    @Value("${chanho.fullName}")
//    private String fullName;
    @Autowired
    ChanhoProperties chanhoProperties;

    @Autowired
    private String hello;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        logger.debug("==========");
        logger.debug(hello);
        logger.debug("==========");

//        System.out.println("=================");
//        System.out.println(chanhoProperties.getName());
////        System.out.println(chanhoProperties.getAge());
//        System.out.println(chanhoProperties.getFullname());
////        System.out.println(chanhoProperties.getSessoinTimeout());
//        System.out.println("=================");
//        System.out.println(hello);
//        System.out.println("=================");
    }
}
