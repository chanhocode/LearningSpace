package com.hello.springboot.Learnjpaandhibernate.course.jpa;

import org.springframework.stereotype.Repository;

import com.hello.springboot.Learnjpaandhibernate.course.Course;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class CourseJpaRepository {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public void insert(Course course) {
		entityManager.merge(course);
	}
	
	public void deleteById(long id) {
		Course findCourse = entityManager.find(Course.class, id);
		entityManager.remove(findCourse);
	}
	
	public Course findById(long id) {
		return entityManager.find(Course.class, id);
	}

}
