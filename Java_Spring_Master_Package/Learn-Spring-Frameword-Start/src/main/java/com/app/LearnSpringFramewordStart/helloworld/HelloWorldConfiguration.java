package com.app.LearnSpringFramewordStart.helloworld;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

// 설정 클래스

record Person (String name, int age, Address address) {};
record Address (String firstLine, String city) {};

@Configuration
public class HelloWorldConfiguration {
	
	@Bean
	public String name() {
		return "Chanho";
	}
	
	@Bean
	public int age() {
		return 28;
	}
	
	@Bean
	public String firstLine() {
		return "BN";
	}
	
	@Bean
	public String city() {
		return "AS";
	}
	
	
	@Bean
	public Person person() {
		return new Person("Jo", 27, new Address("FN", "CA"));
	}
	
	@Bean
	public Person person2MethodCall() {
		return new Person(name(), age(), address());
	}
	
	@Bean
	public Person person3Parameters(String name, int age, Address address3) {
		return new Person(name, age, address3);
	}
	
	@Bean
	@Primary
	public Person person4Parameters(String name, int age, Address address) {
		return new Person(name, age, address);
	}
	
	@Bean
	public Person person5Qualifier(String name, int age, @Qualifier("address3qualifier") Address address) {
		return new Person(name, age, address);
	}
	
	
	@Bean(name = "address2")
	@Primary
	public Address address() {
		return new Address("CN", "CA");
	}
	
	@Bean(name = "address3")
	@Qualifier("address3qualifier")
	public Address address3() {
		return new Address("A3", "C3");
	}
}
