package com.study.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter @Setter @EqualsAndHashCode(of = "id")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Account {
    @Id @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String nickname;
    private String password;

    // 이메일 인증(계정) 유무 판단
    private boolean emailVerified;
    // 이메인 검증 토큰 값
    private String emailCheckToken;

    // 가입 날짜 (이메일 인증 시점)
    private LocalDateTime joinedAt;

    // Profile
    private String bio;
    private String url;
    private String occupation;
    private String location;
    @Lob @Basic(fetch = FetchType.EAGER)
    private String profileImage;

    // Alarm
    // 스터디가 만들어졌음을 이메일, 웹 으로 알림 받을 것인지
    private boolean studyCreateByEmail;
    private boolean studyCreateByWeb;

    // 가입 신청 결과를 이메일, 웹 으로 알림 받을 것인지
    private boolean studyEnrollmentResultByEmail;
    private boolean studyEnrollmentResultByWeb;

    // 스터디에 대한 갱신된 정보들을 이메일, 웹 으로 받을 것인지
    private boolean studyUpdatedByEmail;
    private boolean studyUpdatedByWeb;

    private LocalDateTime emailCheckTokenGeneratedAt;

    public void generateEmailCheckToken() {
        this.emailCheckToken = UUID.randomUUID().toString();
        this.emailCheckTokenGeneratedAt = LocalDateTime.now();
    }

    public void completeSignUp() {
        this.emailVerified = true;
        this.joinedAt = LocalDateTime.now();
    }

    public boolean isValidToken(String token) {
        return this.emailCheckToken.equals(token);
    }

    public boolean canSendConfirmEmail() {
        return this.emailCheckTokenGeneratedAt.isBefore(LocalDateTime.now().minusHours(1));
    }
}
