package com.rest.webservices.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// REST API
@RestController
public class HelloWorldController {
	
	// /hello-world
	@GetMapping("/hello-world")
	public String hellowWorld() {
		return "Hello World";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean hellowWorldBeen() {
		return new HelloWorldBean("Hello World");
	}
}
