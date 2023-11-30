package org.example;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        String cpaHello = StringUtils.capitalize("hello");
        String randomStr = RandomStringUtils.randomAlphabetic(10);
    }
}