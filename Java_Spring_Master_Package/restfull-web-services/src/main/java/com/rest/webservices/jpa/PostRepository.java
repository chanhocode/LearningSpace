package com.rest.webservices.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest.webservices.user.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
	

}
