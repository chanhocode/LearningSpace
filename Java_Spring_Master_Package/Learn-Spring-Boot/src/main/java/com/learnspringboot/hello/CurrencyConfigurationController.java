package com.learnspringboot.hello;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyConfigurationController {
	
	@RequestMapping("/course")
	public List<Course> retrieveAllCourses() {
		return Arrays.asList(
				new Course(1, "Learn AWS", "ch"),
				new Course(2, "Learn DevOps", "JO"),
				new Course(3, "Learn Spring", "Chan")
				);
	}
}
