import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [{
    name: 'Todo 1',
    time: '16:00'
  },{
    name: 'Todo 2',
    time: '8:00'
  },{
    name: 'Todo 3',
    time: '21:00'
  }];
  constructor() {
  }

  ngOnInit() {
  }

}

type ToDo = {
  name: string;
  time: string;
}
