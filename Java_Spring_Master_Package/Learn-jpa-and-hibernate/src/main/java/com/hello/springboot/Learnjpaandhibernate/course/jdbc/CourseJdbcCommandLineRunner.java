package com.hello.springboot.Learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.hello.springboot.Learnjpaandhibernate.course.Course;

//@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner{

	@Autowired
	private CourseJdbcRepository courseJdbcRepository;
	
	@Override
	public void run(String... args) throws Exception {
		courseJdbcRepository.insert(new Course(1, "Learn AWS", "chanho"));
		courseJdbcRepository.insert(new Course(2, "Learn DevOps", "kong"));
		courseJdbcRepository.insert(new Course(3, "Learn Azure", "siru"));
		courseJdbcRepository.deleteById(2);
		System.out.println(courseJdbcRepository.findById(1));
		System.out.println(courseJdbcRepository.findById(3));
	}
	
}
