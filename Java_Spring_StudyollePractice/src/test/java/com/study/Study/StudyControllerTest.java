package com.study.Study;

import com.study.WithAccount;
import com.study.account.AccountRepository;
import com.study.domain.Account;
import com.study.domain.Study;
import lombok.RequiredArgsConstructor;
import lombok.With;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
@RequiredArgsConstructor
class StudyControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    StudyService studyService;
    @Autowired
    StudyRepository studyRepository;
    @Autowired
    AccountRepository accountRepository;

    @AfterEach
    void afterEach() {
        accountRepository.deleteAll();
    }

    @Test
    @WithAccount("chanho")
    @DisplayName("스터디 개설 폼 조회하기")
    void createStudyForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/new-study"))
                .andExpect(status().isOk())
                .andExpect(view().name("study/form"))
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("studyForm"));
    }

    @Test
    @WithAccount("chanho")
    @DisplayName("스터디 개설 - 완료")
    void createStudy_success() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/new-study")
                .param("path", "test-path")
                .param("title", "title")
                .param("shortDescription", "short of a study")
                .param("fullDescription", "full of a study")
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        )
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/study/test-path"));

        Study study = studyRepository.findByPath("test-path");
        assertNotNull(study);
        Account account = accountRepository.findByNickname("chanho");
        assertTrue(study.getManagers().contains(account));
    }

    @Test
    @WithAccount("chanho")
    @DisplayName("스터디 개설 - 실패")
    void createStudy_fail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/new-study")
                        .param("path", "wrong path")
                        .param("title", "title")
                        .param("shortDescription", "short of a study")
                        .param("fullDescription", "full of a study")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                )
                .andExpect(status().isOk())
                .andExpect(view().name("study/form"))
                .andExpect(model().hasErrors())
                .andExpect(model().attributeExists("studyForm"))
                .andExpect(model().attributeExists("account"));

        Study study = studyRepository.findByPath("wrong path");
        assertNull(study);
    }

    @Test
    @WithAccount("chanho")
    @DisplayName("스터디 조회")
    void viewStudy() throws Exception {
        Study study = new Study();
        study.setPath("test-path");
        study.setTitle("test");
        study.setShortDescription("short description");
        study.setFullDescription("<p>full description</p>");

        Account chanho = accountRepository.findByNickname("chanho");
        studyService.createNewStudy(study, chanho);

        mockMvc.perform(MockMvcRequestBuilders.get("/study/test-path"))
                .andExpect(view().name("study/view"))
                .andExpect(model().attributeExists("account"))
                .andExpect(model().attributeExists("study"));
    }


}