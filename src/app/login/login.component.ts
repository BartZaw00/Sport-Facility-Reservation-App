import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUser: LoginModel = new LoginModel();

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('key')) {
      localStorage.setItem('key', 'loaded')
      location.reload()
    } else {
      localStorage.removeItem('key')
    }
  }

  login() {
    this._loginService.loginUser(this.loginUser).subscribe({
      next: (data: any) => {
        //localStorage.setItem('token',data.jwtBearer)
        localStorage.setItem('role', data.role?.toString())
        this._loginService.setRole(data.role);
        console.log(this.loginUser)
        this._router.navigate(['/sports-facilities']);
      },
      error: () => {
        console.log("error")
      }
    })
  }
}
