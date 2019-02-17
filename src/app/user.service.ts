import {UserModel} from './user.model';

export class UserService {
  users:UserModel[] = [];
  constructor(){
    for(let i = 0; i < 100; i++){
      let id = Math.floor(Math.random() * (1000 - 100) + 100);
      this.users.push(new UserModel(id,'Username ' + i));
    }
  }

  getUserById(id: number): UserModel|null{
    for(let user of this.users){
      if(user.id === id){
        return user;
      }
    }
    return null;
  }
}
