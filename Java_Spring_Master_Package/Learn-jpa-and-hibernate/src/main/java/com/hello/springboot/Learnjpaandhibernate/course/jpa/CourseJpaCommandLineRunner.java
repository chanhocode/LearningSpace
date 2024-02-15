package com.hello.springboot.Learnjpaandhibernate.course.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.hello.springboot.Learnjpaandhibernate.course.Course;

//@Component
public class CourseJpaCommandLineRunner implements CommandLineRunner{

	@Autowired
	private CourseJpaRepository courseJpaRepository;
	
	@Override
	public void run(String... args) throws Exception {
		courseJpaRepository.insert(new Course(1, "Learn AWS", "chanho"));
		courseJpaRepository.insert(new Course(2, "Learn DevOps", "kong"));
		courseJpaRepository.insert(new Course(3, "Learn Azure", "siru"));
		courseJpaRepository.deleteById(2);
		System.out.println(courseJpaRepository.findById(1));
		System.out.println(courseJpaRepository.findById(3));
	}
	
}
