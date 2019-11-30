package com.genesis.todo.model;

import java.util.Date;

public class Todo {

	private long id;
	private String description;
	private boolean done;
	private Date targetDate;

	public Todo() {
		super();
	}

	public Todo(long id, String description, boolean done, Date targetDate) {
		super();
		this.id = id;
		this.description = description;
		this.done = done;
		this.targetDate = targetDate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date date) {
		this.targetDate = date;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
