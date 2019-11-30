package com.genesis.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.genesis.todo.model.Todo;
import com.genesis.todo.model.UserTodos;

@Service
public class HardcodedTodoService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "learn to dance", false, new Date()));
		todos.add(new Todo(++idCounter, "learn microservices", false, new Date()));
		todos.add(new Todo(++idCounter, "learn angular", false, new Date()));
		todos.add(new Todo(++idCounter, "create a diet chart", false, new Date()));
	}

	public UserTodos findAll(String username) {
		return new UserTodos(username, todos);
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		todos.remove(todo);
		return todo;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
}
