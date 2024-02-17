package com.hello.springboot.MyFirstWebApp.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
	
	public boolean authenticate(String name, String password) {
		
		boolean isValidUserName = name.equalsIgnoreCase("chanho");
		boolean isValidPassword = password.equalsIgnoreCase("1234");
		
		return isValidUserName && isValidPassword;
	}

}
