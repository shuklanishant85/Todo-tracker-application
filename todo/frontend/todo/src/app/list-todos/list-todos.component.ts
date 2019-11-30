import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

export class UserTodos {
  constructor(
    public username: string,
    public todos: Todo[]
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string

  constructor(private todoDataService: TodoDataService,
      private router: Router) { }

  ngOnInit() {
    this.refreshTodos()
  }

  deleteTodo(id) {
    console.log(`delete todo with id ${id}`)
    this.todoDataService.deleteTodoDataService('nishant', id).subscribe(
      response => {
        console.log(response)
        this.message = `Your todo has been removed successfully!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  refreshTodos(){
    this.todoDataService.executeTodoDataService('nishant').subscribe(
      response => this.todos = response.todos
    )
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
