package com.study.main;

import com.study.account.AccountRepository;
import com.study.account.AccountService;
import com.study.account.SignUpForm;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.unauthenticated;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MainControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    AccountService accountService;

    @Autowired
    AccountRepository accountRepository;

    @BeforeEach
    void beforeEach() {
        SignUpForm signUpForm = new SignUpForm();
        signUpForm.setNickname("chanho");
        signUpForm.setEmail("ch@gmail.com");
        signUpForm.setPassword("12345678");
        accountService.processNewAccount(signUpForm);
    }
    @AfterEach
    void afterEach() {
        accountRepository.deleteAll();
    }

    @DisplayName("로그인_이메일_테스트")
    @Test
    void login_with_email() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/login")
                .param("username", "ch@gmail.com")
                .param("password", "12345678")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/"))
                .andExpect(authenticated().withUsername("chanho"));
    }
    @DisplayName("로그인_닉네임_테스트")
    @Test
    void login_with_nickname() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/login")
                        .param("username", "chanho")
                        .param("password", "12345678")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/"))
                .andExpect(authenticated().withUsername("chanho"));
    }

    @DisplayName("로그인_실패_테스트")
    @Test
    void login_fail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/login")
                        .param("username", "chanho")
                        .param("password", "123458")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/login?error"))
                .andExpect(unauthenticated());
    }

    @DisplayName("로그아웃")
    @Test
    void logout() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.post("/logout")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/"))
                .andExpect(unauthenticated());
    }



}