import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makeLogin() {
    this.router.navigate(['/login']).then(value => {
      if(value){
        console.log('Navigation ok')
      }else{
        console.log('Navigation error');
      }
    })
  }
}
