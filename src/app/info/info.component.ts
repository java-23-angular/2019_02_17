import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserModel} from '../user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user: UserModel | null = null;
  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(Number(id));
  }

}
