package com.study.Settings.form;

import com.study.domain.Account;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class Notifications {
    private boolean studyCreatedByEmail;
    private boolean studyCreatedByWeb;
    private boolean studyEnrollmentResultByEmail;
    private boolean studyEnrollmentResultByWeb;
    private boolean studyUpdatedByEmail;
    private boolean studyUpdatedByWeb;
}
