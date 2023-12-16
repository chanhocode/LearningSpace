package com.study.Settings;

import com.study.WithAccount;
import com.study.account.AccountRepository;
import com.study.account.AccountService;
import com.study.domain.Account;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class SettingsControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    AccountRepository accountRepository;

    @AfterEach
    void afterEach() {
        accountRepository.deleteAll();
    }

    @WithAccount("chanho")
    @DisplayName("프로필 수정 폼")
    @Test
    void updateProfileForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(SettingsController.SETTINGS_PROFILE_URL))
                .andExpect(status().isOk())
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("profile"));
    }

    @WithAccount("chanho")
    @DisplayName("프로필 수정하기_입력 값 정상")
    @Test
    void updateProfile() throws Exception {

        String bio = "bio 수정 합니다.";
        mockMvc.perform(MockMvcRequestBuilders.post(
                SettingsController.SETTINGS_PROFILE_URL
        ) .param("bio", bio).with(SecurityMockMvcRequestPostProcessors.csrf())
        ).andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl(SettingsController.SETTINGS_PROFILE_URL))
                .andExpect(flash().attributeExists("message"));

        Account user = accountRepository.findByNickname("chanho");
        assertEquals(bio, user.getBio());
    }

    @WithAccount("chanho")
    @DisplayName("프로필 수정하기_입력 값 비정상")
    @Test
    void updateProfile_error() throws Exception {
        String bio = "bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.bio 수정 합니다.";
        mockMvc.perform(MockMvcRequestBuilders.post(
                                SettingsController.SETTINGS_PROFILE_URL
                        ) .param("bio", bio).with(SecurityMockMvcRequestPostProcessors.csrf())
                ).andExpect(status().isOk())
                .andExpect(view().name(SettingsController.SETTINGS_PROFILE_VIEW_NAME))
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("profile"))
                .andExpect(model().hasErrors());

        Account user = accountRepository.findByNickname("chanho");
        assertNull(user.getBio());
    }
}