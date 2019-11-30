package com.genesis.todo.model;

public class AuthenticationBean {

	private String message;

	public AuthenticationBean() {
		super();
	}

	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
