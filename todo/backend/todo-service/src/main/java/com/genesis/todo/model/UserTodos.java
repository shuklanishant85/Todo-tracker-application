package com.genesis.todo.model;

import java.util.List;

public class UserTodos {
	private String username;
	private List<Todo> todos;

	public UserTodos(String username, List<Todo> todos) {
		super();
		this.username = username;
		this.todos = todos;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Todo> getTodos() {
		return todos;
	}

	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}

}
