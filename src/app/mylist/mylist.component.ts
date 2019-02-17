import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
