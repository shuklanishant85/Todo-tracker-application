package com.genesis.todo.model;

public class WelcomeResponse {

	private String message;
	private UserType userType;
	private String userID;
	private String userName;

	public WelcomeResponse(String message, UserType userType, String userID, String userName) {
		super();
		this.message = message;
		this.userType = userType;
		this.userID = userID;
		this.userName = userName;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
