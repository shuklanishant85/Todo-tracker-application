import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.retriveTodo()
  }

  retriveTodo() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoDataService.retriveTodoDataService('nishant', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoDataService.addTododataService('nishant', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoDataService.updateTodoDataService('nishant', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }

  }

  addTodo() {
    this.todoDataService.addTododataService('nishant', this.todo).subscribe(
      response => console.log(response)
    )
  }

}
