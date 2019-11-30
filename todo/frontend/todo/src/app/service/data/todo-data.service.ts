import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTodos, Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  executeTodoDataService(username) {
    return this.http.get<UserTodos>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodoDataService(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retriveTodoDataService(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodoDataService(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  addTododataService(username, todo) {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos/`, todo);
  }
}
