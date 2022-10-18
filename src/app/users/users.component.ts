import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  _users: UserModel[] = [];
  public user: UserModel = new UserModel();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this._userService
    .getUsers()
    .subscribe(
      {next: (response: UserModel[]) => {
        this._users = response;
        console.log(this._users);
      },
     
      error: () => {
             console.log("error")
      }}
     )
   }

   createUser(user: UserModel){
    this._userService.createUser(user)
    .subscribe({
     next: (result: UserModel[]) => {
       this._userService.getUsers();
       window.location.reload();
     },
    
     error: () => {
            console.log("error")
     }
     
    })
  }

   deleteUser(user: UserModel){
    this._userService.deleteUser(user)
    .subscribe({
      next: (result:UserModel[]) => {
        this._userService.getUsers;
        window.location.reload(); 
      },
      error: () => {
        console.log("error")
      }
    })
   }

}
