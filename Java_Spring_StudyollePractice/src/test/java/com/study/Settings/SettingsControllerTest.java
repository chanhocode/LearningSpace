package com.study.Settings;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.study.Settings.form.TagForm;
import com.study.Settings.form.ZoneForm;
import com.study.WithAccount;
import com.study.account.AccountRepository;
import com.study.account.AccountService;
import com.study.domain.Account;
import com.study.domain.Tag;
import com.study.domain.Zone;
import com.study.tag.TagRepository;
import com.study.zone.ZoneRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
class SettingsControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    AccountService accountService;

    @Autowired
    ZoneRepository zoneRepository;

    private Zone testZone = Zone.builder().city("test").localNameOfCity("테스트시").province("테스트주").build();
    @BeforeEach
    void beforeEach() { zoneRepository.save(testZone); }


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

    @WithAccount("chanho")
    @DisplayName("패스워드 수정 폼")
    @Test
    void updatePassword_form() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(SettingsController.SETTINGS_PASSWORD_URL))
                .andExpect(status().isOk())
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("passwordForm"));
    }

    @WithAccount("chanho")
    @DisplayName("패스워드 수정 - 정상")
    @Test
    void updatePassword_success() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_PASSWORD_URL)
                .param("newPassword", "asdfjklp")
                .param("newPasswordConfirm", "asdfjklp")
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl(SettingsController.SETTINGS_PASSWORD_URL))
                .andExpect(flash().attributeExists("message"));

        Account user = accountRepository.findByNickname("chanho");
        assertTrue(passwordEncoder.matches("asdfjklp", user.getPassword()));
    }

    @WithAccount("chanho")
    @DisplayName("패스워드 수정 - 오류")
    @Test
    void updatePassword_fail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_PASSWORD_URL)
                        .param("newPassword", "asdfjklp")
                        .param("newPasswordConfirm", "fdasfdsfa")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().isOk())
                .andExpect(view().name(SettingsController.SETTINGS_PASSWORD_VIEW_NAME))
                .andExpect(model().hasErrors())
                .andExpect(model().attributeExists("passwordForm"))
                .andExpect(model().attributeExists("account"));
    }

    @WithAccount("chanho")
    @DisplayName("닉네임 수정 폼")
    @Test
    void updateAccountForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(SettingsController.SETTINGS_ACCOUNT_URL))
                .andExpect(status().isOk())
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("nicknameForm"));
    }

    @WithAccount("chanho")
    @DisplayName("닉네임 수정 - 성공")
    @Test
    void updateAccount() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_ACCOUNT_URL)
                .param("nickname", "hello")
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl(SettingsController.SETTINGS_ACCOUNT_URL))
                .andExpect(flash().attributeExists("message"));
    }

    @WithAccount("chanho")
    @DisplayName("닉네임 수정 - 실패")
    @Test
    void updateAccountFail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_ACCOUNT_URL)
                        .param("nickname", "¯\\_(ツ)_/¯")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().isOk())
                .andExpect(view().name(SettingsController.SETTINGS_ACCOUNT_VIEW_NAME))
                .andExpect(model().hasErrors())
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("nicknameForm"));
    }

    @WithAccount("chanho")
    @DisplayName("태그 - 수정 폼")
    @Test
    void updateTagsForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(SettingsController.SETTINGS_TAGS_URL))
                .andExpect(view().name(SettingsController.SETTINGS_TAGS_VIEW_NAME))
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("whitelist"))
                .andExpect(model().attributeExists("tags"));
    }

    @WithAccount("chanho")
    @DisplayName("태그 - 추가")
    @Test
    void addTags() throws Exception {
        TagForm tagForm = new TagForm();
        tagForm.setTagTitle("newTag");
        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_TAGS_URL + "/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(tagForm))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().isOk());

        Tag newTag = tagRepository.findByTitle("newTag");
        assertNotNull(newTag);
        Account user = accountRepository.findByNickname("chanho");
        assertTrue(user.getTags().contains(newTag));
    }

    @WithAccount("chanho")
    @DisplayName("태그 - 삭제")
    @Test
    void removeTags() throws Exception {
        Account user = accountRepository.findByNickname("chanho");
        Tag newTag = tagRepository.save(Tag.builder().title("newTag").build());
        accountService.addTag(user, newTag);

        assertTrue(user.getTags().contains(newTag));

        TagForm tagForm = new TagForm();
        tagForm.setTagTitle("newTag");

        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_TAGS_URL + "/remove")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(tagForm))
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().isOk());

        assertFalse(user.getTags().contains(newTag));
    }


    @WithAccount("chanho")
    @DisplayName("지역 정보 - 폼")
    @Test
    void updateZonesForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/settings/zones"))
                .andExpect(status().isOk())
                .andExpect(view().name(SettingsController.SETTINGS_ZONE_VIEW_NAME))
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("whitelist"))
                .andExpect(model().attributeExists("zones"));
    }


    @WithAccount("chanho")
    @DisplayName("지역 정보 - 추가")
    @Test
    void addZone() throws Exception {
        ZoneForm zoneForm = new ZoneForm();
        zoneForm.setZoneName(testZone.toString());

        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_ZONE_URL + "/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(zoneForm))
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        ).andExpect(status().isOk());

        Account user = accountRepository.findByNickname("chanho");
        Zone zone = zoneRepository.findByCityAndProvince(testZone.getCity(), testZone.getProvince());
        assertTrue(user.getZones().contains(zone));
    }

    @WithAccount("chanho")
    @DisplayName("지역 정보 - 삭제")
    @Test
    void removeZone() throws Exception {
        Account user = accountRepository.findByNickname("chanho");
        Zone zone = zoneRepository.findByCityAndProvince(testZone.getCity(), testZone.getProvince());
        accountService.addZone(user, zone);

        ZoneForm zoneForm = new ZoneForm();
        zoneForm.setZoneName(testZone.toString());

        mockMvc.perform(MockMvcRequestBuilders.post(SettingsController.SETTINGS_ZONE_URL + "/remove")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(zoneForm))
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        ).andExpect(status().isOk());

        assertFalse(user.getZones().contains(zone));

    }



}