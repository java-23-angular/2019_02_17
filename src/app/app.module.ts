import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MylistComponent } from './mylist/mylist.component';
import { InfoComponent } from './info/info.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './user.service';
import { TodoComponent } from './todo/todo.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component:MylistComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'todo', component: TodoComponent, children:[
      {path:':name/:time', component:TodoInfoComponent}
    ]},
  {path:'login', component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MylistComponent,
    InfoComponent,
    TodoComponent,
    TodoInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
