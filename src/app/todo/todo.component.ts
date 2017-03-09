import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;
  text;
  oldTodoText;
  appState = 'default';

  constructor(private _todosService: TodoService) { }

  ngOnInit() {
    this.todos = this._todosService.getTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.text
    };

    if(this.appState == 'edit') {
      this.updateTodo();
      this.appState = 'add';
    } else {
      this.todos.push(newTodo);
      this._todosService.add(newTodo);
    }
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.text = todo.text;
    this.oldTodoText = todo.text;
  }

  updateTodo() {
    for(let i=0; i < this.todos.length; i++) {
      if(this.todos[i].text == this.oldTodoText) {
        this.todos[i].text = this.text
      }
    }

    this._todosService.update(this.oldTodoText, this.text);
  }

  deleteTodo(text) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == text) {
        this.todos.splice(i, 1);
      }
    }

    this._todosService.delete(text);
  }
}
