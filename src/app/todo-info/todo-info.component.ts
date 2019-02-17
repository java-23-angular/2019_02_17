import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {
  name: string = '';
  time: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.time = this.route.snapshot.paramMap.get('time');

    this.route.params.subscribe((value:Params) => {
      this.name = value['name'];
      this.time = value['time'];
    });
  }

}
