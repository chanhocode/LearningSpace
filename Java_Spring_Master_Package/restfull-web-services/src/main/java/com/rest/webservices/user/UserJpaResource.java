package com.rest.webservices.user;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rest.webservices.jpa.UserRepository;

import jakarta.validation.Valid;


@RestController
public class UserJpaResource {
	
	private UserDaoService service;
	
	private UserRepository repository;
	
	public UserJpaResource(UserDaoService service, UserRepository repository) {
		this.service = service;
		this.repository = repository;
	}
	
	@GetMapping("/jpa/users")
	public List<User> retrieveAllUsers() {
		return repository.findAll();
	}
	
	@GetMapping("/jpa/users/{userId}")
	public EntityModel<User> retrieveUser(@PathVariable Integer userId) {
		Optional<User> user = repository.findById(userId);
		if (user.isEmpty()) {
			throw new UserNotFoundException("id: " + userId);
		}
		
		EntityModel<User> entityModel = EntityModel.of(user.get());
		WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());
		entityModel.add(link.withRel("all-users"));
		
		return entityModel;
	}
	
	@PostMapping("/jpa/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		User savedUser = repository.save(user);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("/jpa/users/{userId}")
	public void deleteUser(@PathVariable Integer userId) {
		repository.deleteById(userId);
	}
	
	
	
	@GetMapping("/jpa/users/{userId}/posts")
	public List<Post> retrievePostsForUser(@PathVariable Integer userId) {
		Optional<User> user = repository.findById(userId);
		if (user.isEmpty()) {
			throw new UserNotFoundException("id: " + userId);
		}
		
		return user.get().getPosts();
	}
	
}
