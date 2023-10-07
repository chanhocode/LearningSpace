package com.ltb311.ltb311;

import com.ltb311.ltb311.account.Account;
import com.ltb311.ltb311.account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class AccountRunner implements ApplicationRunner {

    @Autowired
    AccountService accountService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Account chanho = accountService.createAccount("chanho", "1234");
        System.out.println(chanho.getUsername() + " password: " + chanho.getPassword());
    }
}
