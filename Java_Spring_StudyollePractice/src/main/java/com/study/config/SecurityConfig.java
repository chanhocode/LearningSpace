package com.study.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests((authorizeRequests) -> {
                    authorizeRequests.requestMatchers("/", "/login", "/sign-up", "check-email",
                            "check-email-token", "email-login", "check-email-login", "/login-link").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET,"/profile/*").permitAll();
                    authorizeRequests.anyRequest().authenticated();
                })
                .build();
    }

}
