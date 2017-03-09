import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
    console.log('TodosService Initalized...');
    this.load();
  }

  load() {
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
      let todos = [
        {
          text: 'stbui:http://stbui.com'
        },
        {
          text: 'blog:http://blog.stbui.com'
        },
        {
          text: 'website:http://431103.com'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
    } else {

    }
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  add(newTodo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  update(oldText, newText) {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i=0; i < todos.length; i++) {
      if(todos[i].text == oldText) {
        todos[i].text = newText;
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  delete(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i=0; i < todos.length; i++) {
      if(todos[i].text == todoText) {
        todos.splice(i,1);
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
