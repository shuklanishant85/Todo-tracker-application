package com.genesis.todo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genesis.todo.model.UserType;
import com.genesis.todo.model.WelcomeResponse;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/home")
public class HomeController {

	@GetMapping(produces = "application/json", value = "/welcome")
	public WelcomeResponse displayAnonymousMessage() {
		return new WelcomeResponse("Welcome user. Welcome to our ToDo Application.", UserType.ANONYMOUS, "", "");
	}

	@GetMapping(produces = "application/json", path = "/welcome/{username}")
	public WelcomeResponse displayUserMessage(@PathVariable String username) {
		if (username.equals("admin"))
			throw new RuntimeException("Some error occured.. please contact admin @genesis.support@gmail.com");
		return new WelcomeResponse(
				"Welcome " + username + "! You are our verified user. You get to have some of our premium benefits. ",
				UserType.VERIFIED, username, username);
	}
}
