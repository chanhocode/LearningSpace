package com.study;

import com.study.account.AccountService;
import com.study.account.SignUpForm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.test.context.support.WithSecurityContextFactory;

@RequiredArgsConstructor
public class WithAccountContextFactory implements WithSecurityContextFactory<WithAccount> {

    private final AccountService accountService;
    @Override
    public SecurityContext createSecurityContext(WithAccount withAccount) {
        String nickname = withAccount.value();

        // 유저 생성
        SignUpForm signUpForm = new SignUpForm();
        signUpForm.setNickname(nickname);
        signUpForm.setEmail(nickname + "@gmail.com");
        signUpForm.setPassword("12345678");
        accountService.processNewAccount(signUpForm);

        // 셋팅
        UserDetails principal = accountService.loadUserByUsername(nickname);
        Authentication authentication = new UsernamePasswordAuthenticationToken(principal, principal.getPassword(), principal.getAuthorities());
        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);
        return context;
    }
}
