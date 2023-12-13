package com.study.account;

import com.study.domain.Account;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.then;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class AccountControllerTest {

    @Autowired private MockMvc mockMvc;

    @Autowired AccountRepository accountRepository;

    @MockBean
    JavaMailSender javaMailSender;

    @DisplayName("회원 가입 화면에 진입하는지 테스트")
    @Test
    void signUpForm() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/sign-up"))
                .andExpect(status().isOk())
                .andExpect(view().name("account/sign-up"))
                .andExpect(model().attributeExists("signUpForm"));
    }

    @DisplayName("회원 가입 처리 - 입력값 오류")
    @Test
    @WithMockUser
    void signUpSubmit_with_wrong_input() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.post("/sign-up")
                        .param("nickname", "chanho")
                        .param("email", "ch@gmail.com")
                        .param("password", "1234")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().isOk())
                .andExpect(view().name("account/sign-up"));
    }


    @DisplayName("회원 가입 처리 - 입력값 정상")
    @Test
    @WithMockUser
    void signUpSubmit_with_correct_input() throws Exception {
        mockMvc.perform(
                        MockMvcRequestBuilders.post("/sign-up")
                                .param("nickname", "hello")
                                .param("email", "hi@gmail.com")
                                .param("password", "12345678")
                                .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().is3xxRedirection())
                .andExpect(view().name("redirect:/"));

        Account account = accountRepository.findByEmail("hi@gmail.com");
        assertNotNull(account);
        assertNotEquals(account.getPassword(),"12345678");
        then(javaMailSender).should().send(any(SimpleMailMessage.class));
    }
}
