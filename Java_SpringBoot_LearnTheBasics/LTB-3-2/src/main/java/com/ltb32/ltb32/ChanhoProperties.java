package com.ltb32.ltb32;

import com.sun.istack.internal.NotNull;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.convert.DurationUnit;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

@Component
@ConfigurationProperties("chanho")
@Validated
public class ChanhoProperties {

    private String name;
    private int age;
    private String fullname;

    public Duration getSessoinTimeout() {
        return sessoinTimeout;
    }

    public void setSessoinTimeout(Duration sessoinTimeout) {
        this.sessoinTimeout = sessoinTimeout;
    }

    @DurationUnit(ChronoUnit.SECONDS)
    private Duration sessoinTimeout = Duration.ofSeconds(30);
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
