package com.study.Settings;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.study.Settings.form.*;
import com.study.Settings.validator.NicknameValidator;
import com.study.Settings.validator.PasswordFormValidator;
import com.study.account.AccountService;
import com.study.account.CurrentUser;
import com.study.domain.Account;
import com.study.domain.Tag;
import com.study.domain.Zone;
import com.study.tag.TagRepository;
import com.study.zone.ZoneRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class SettingsController {

    @InitBinder("passwordForm")
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.addValidators(new PasswordFormValidator());
    }

    @InitBinder("nicknameForm")
    public void nicknameFormInitBinder(WebDataBinder webDataBinder) { webDataBinder.addValidators(nicknameValidator);}
    static final String SETTINGS_PROFILE_VIEW_NAME = "settings/profile";
    static final String SETTINGS_PROFILE_URL = "/settings/profile";
    static final String SETTINGS_PASSWORD_VIEW_NAME = "settings/password";
    static final String SETTINGS_PASSWORD_URL = "/settings/password";
    static final String SETTINGS_NOTIFICATIONS_VIEW_NAME = "settings/notifications";
    static final String SETTINGS_NOTIFICATIONS_URL = "/settings/notifications";
    static final String SETTINGS_ACCOUNT_VIEW_NAME = "settings/account";
    static final String SETTINGS_ACCOUNT_URL = "/settings/account";
    static final String SETTINGS_TAGS_VIEW_NAME = "settings/tags";
    static final String SETTINGS_TAGS_URL = "/settings/tags";
    static final String SETTINGS_ZONE_VIEW_NAME = "settings/zones";
    static final String SETTINGS_ZONE_URL = "/settings/zones";

    private final AccountService accountService;
    private final ModelMapper modelMapper;
    private final NicknameValidator nicknameValidator;
    private final TagRepository tagRepository;
    private final ZoneRepository zoneRepository;
    private final ObjectMapper objectMapper;

    @GetMapping(SETTINGS_PROFILE_URL)
    public String updateProfileForm(@CurrentUser Account account, Model model) {
        model.addAttribute(account);
        model.addAttribute(modelMapper.map(account, Profile.class));
        return SETTINGS_PROFILE_VIEW_NAME;
    }

    @PostMapping(SETTINGS_PROFILE_URL)
    public String updateProfile(@CurrentUser Account account, @Valid Profile profile,
                                Errors errors, Model model, RedirectAttributes attributes) {
        if(errors.hasErrors()) {
            model.addAttribute(account);
            return SETTINGS_PROFILE_VIEW_NAME;
        }

        accountService.updateProfile(account, profile);
        attributes.addFlashAttribute("message", "프로필 수정 완료");
        return "redirect:" + SETTINGS_PROFILE_URL;
    }

    @GetMapping(SETTINGS_PASSWORD_URL)
    public String updatePasswordForm(@CurrentUser Account account, Model model) {
        model.addAttribute(account);
        model.addAttribute(new PasswordForm());
        return SETTINGS_PASSWORD_VIEW_NAME;
    }

    @PostMapping(SETTINGS_PASSWORD_URL)
    public String updatePassword(@CurrentUser Account account, @Valid PasswordForm passwordForm, Errors errors,
                                 Model model, RedirectAttributes attributes) {
        if(errors.hasErrors()) {
            model.addAttribute(account);
            return SETTINGS_PASSWORD_VIEW_NAME;
        }
        accountService.updatePassword(account, passwordForm.getNewPassword());
        attributes.addFlashAttribute("message", "패스워드 변경 완료");
        return "redirect:" + SETTINGS_PASSWORD_URL;
    }

    @GetMapping(SETTINGS_NOTIFICATIONS_URL)
    public String updateNotificationsForm(@CurrentUser Account account, Model model) {
        model.addAttribute(account);
        model.addAttribute(modelMapper.map(account, Notifications.class));
        return SETTINGS_NOTIFICATIONS_VIEW_NAME;
    }

    @PostMapping(SETTINGS_NOTIFICATIONS_URL)
    public String updateNotifications(@CurrentUser Account account, @Valid Notifications notifications, Errors errors,
                                          Model model, RedirectAttributes attributes) {
        if(errors.hasErrors()) {
            model.addAttribute(account);
            return SETTINGS_NOTIFICATIONS_VIEW_NAME;
        }
        accountService.updateNotifications(account, notifications);
        attributes.addFlashAttribute("message", "알림 설정 변경 완료");
        return "redirect:" + SETTINGS_NOTIFICATIONS_URL;
    }

    @GetMapping(SETTINGS_ACCOUNT_URL)
    public String updateAccountForm(@CurrentUser Account account, Model model) {
        model.addAttribute(account);
        model.addAttribute(modelMapper.map(account, NicknameForm.class));
        return SETTINGS_ACCOUNT_VIEW_NAME;
    }

    @PostMapping(SETTINGS_ACCOUNT_URL)
    public String updateAccount (@CurrentUser Account account, @Valid NicknameForm nicknameForm, Errors errors,
                                 Model model, RedirectAttributes attributes, HttpServletRequest request) {
        if(errors.hasErrors()) {
            model.addAttribute(account);
            return SETTINGS_ACCOUNT_VIEW_NAME;
        }
        accountService.updateNickname(account, nicknameForm.getNickname(), request);
        attributes.addFlashAttribute("message", "닉네임을 수정했습니다.");
        return "redirect:" + SETTINGS_ACCOUNT_URL;
    }

    @GetMapping(SETTINGS_TAGS_URL)
    public String updateTags(@CurrentUser Account account, Model model) throws JsonProcessingException {
        model.addAttribute(account);
        Set<Tag> tags = accountService.getTages(account);
        model.addAttribute("tags", tags.stream().map(Tag::getTitle).collect(Collectors.toList()));

        List<String> allTags = tagRepository.findAll().stream().map(Tag::getTitle).collect(Collectors.toList());
        model.addAttribute("whitelist", objectMapper.writeValueAsString(allTags));
        return  SETTINGS_TAGS_VIEW_NAME;
    }

    @PostMapping("/settings/tags/add")
    @ResponseBody
    public ResponseEntity addTag(@CurrentUser Account account, @RequestBody TagForm tagForm) {
        String title = tagForm.getTagTitle();
        Tag tag =tagRepository.findByTitle(title);

        if(tag ==null) {
            tag = tagRepository.save(Tag.builder().title(title).build());
        }
        accountService.addTag(account, tag);
        return  ResponseEntity.ok().build();
    }

    @PostMapping("/settings/tags/remove")
    @ResponseBody
    public ResponseEntity removeTag(@CurrentUser Account account, @RequestBody TagForm tagForm) {
        String title = tagForm.getTagTitle();
        Tag tag =tagRepository.findByTitle(title);

        if(tag ==null) {
            return ResponseEntity.badRequest().build();
        }
        accountService.removeTag(account, tag);
        return  ResponseEntity.ok().build();
    }



    @GetMapping(SETTINGS_ZONE_URL)
    public String updateZonesForm(@CurrentUser Account account, Model model) throws JsonProcessingException {
        model.addAttribute(account);

        Set<Zone> zones = accountService.getZones(account);
        model.addAttribute("zones", zones.stream().map(Zone::toString).collect(Collectors.toList()));

        List<String> allZones = zoneRepository.findAll().stream().map(Zone::toString).collect(Collectors.toList());
        model.addAttribute("whitelist", objectMapper.writeValueAsString(allZones));
        return SETTINGS_ZONE_VIEW_NAME;
    }

    @PostMapping(SETTINGS_ZONE_URL + "/add")
    @ResponseBody
    public ResponseEntity addZone(@CurrentUser Account account, @RequestBody ZoneForm zoneForm) {
        Zone zone = zoneRepository.findByCityAndProvince(zoneForm.getCityName(), zoneForm.getProvinceName());
        if (zone == null) {
            return ResponseEntity.badRequest().build();
        }

        accountService.addZone(account, zone);
        return ResponseEntity.ok().build();
    }

    @PostMapping(SETTINGS_ZONE_URL + "/remove")
    @ResponseBody
    public ResponseEntity removeZone(@CurrentUser Account account, @RequestBody ZoneForm zoneForm) {
        Zone zone = zoneRepository.findByCityAndProvince(zoneForm.getCityName(), zoneForm.getProvinceName());
        if (zone == null) {
            return ResponseEntity.badRequest().build();
        }

        accountService.removeZone(account, zone);
        return ResponseEntity.ok().build();
    }


}
