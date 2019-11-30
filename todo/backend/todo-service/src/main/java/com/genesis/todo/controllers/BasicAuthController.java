package com.genesis.todo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genesis.todo.model.AuthenticationBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class BasicAuthController {

	@GetMapping(produces = "application/json", value = "/basicauth")
	public AuthenticationBean displayAnonymousMessage() {
		return new AuthenticationBean("User authenticated successfully");
	}

}
