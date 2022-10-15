import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { UserService } from '../services/user.service';

import { outputAst } from '@angular/compiler';
import { UserModel } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _user: UserModel[] = [];
  public user: UserModel = new UserModel();

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this._userService.getUsers()
    .subscribe((result: UserModel[]) => (this._user = result),
      );
  }

   createUser(user: UserModel){
     this._userService.createUser(user)
     .subscribe({
      next: (result: UserModel[]) => {
        this._userService.getUsers();
        this._router.navigate(['/login']);
      },
     
      error: () => {
             console.log("error")
      }
     })
   }
}
