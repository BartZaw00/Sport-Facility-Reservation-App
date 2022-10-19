import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from '../models/user';
import { UserService } from '../services/user.service';
import { UserPopUpComponent } from '../user-pop-up/user-pop-up.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  _users: UserModel[] = [];
  public user: UserModel = new UserModel();
  public selectedUser: UserModel = new UserModel();
  searchText: any;

  constructor(private _userService: UserService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.selectedUser)
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

   selectUserPopUp(user: UserModel){
    this._dialog.open(UserPopUpComponent,{
      data: user
    });
   }
}
