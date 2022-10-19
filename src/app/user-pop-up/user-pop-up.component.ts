import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pop-up',
  templateUrl: './user-pop-up.component.html',
  styleUrls: ['./user-pop-up.component.css']
})
export class UserPopUpComponent implements OnInit {

  public user: UserModel = new UserModel();

  constructor(private _userService: UserService, @Inject(MAT_DIALOG_DATA) public selectedUser: UserModel ) { }

  ngOnInit(): void {
  }

  editSelectedUser(user:UserModel){
    this._userService.updateUser(user)
      .subscribe({
        next: (result:UserModel[]) => {
          this._userService.getUsers();
          window.location.reload(); 
        },
        error: () => {
          console.log("error")
        }
      })
   }

}
