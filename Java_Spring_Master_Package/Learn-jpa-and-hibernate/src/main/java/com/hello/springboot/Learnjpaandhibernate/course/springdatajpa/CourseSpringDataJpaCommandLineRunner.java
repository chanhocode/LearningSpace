package com.hello.springboot.Learnjpaandhibernate.course.springdatajpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.hello.springboot.Learnjpaandhibernate.course.Course;

@Component
public class CourseSpringDataJpaCommandLineRunner implements CommandLineRunner{

	@Autowired
	private CourseSpringDataJpaRepository courseSpringDataJpaRepository;
	
	@Override
	public void run(String... args) throws Exception {
		courseSpringDataJpaRepository.save(new Course(1, "Learn AWS", "chanho"));
		courseSpringDataJpaRepository.save(new Course(2, "Learn DevOps", "kong"));
		courseSpringDataJpaRepository.save(new Course(3, "Learn Azure", "siru"));
		
		courseSpringDataJpaRepository.deleteById(2l);
		System.out.println(courseSpringDataJpaRepository.findById(1l));
		System.out.println(courseSpringDataJpaRepository.findById(3l));
		
		System.out.println(courseSpringDataJpaRepository.findByAuthor("chanho"));
	 }
	
}
