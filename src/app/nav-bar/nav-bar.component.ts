import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  role: Number = -1;

  constructor(public loginService: LoginService) {
    loginService.roleChanged.subscribe( (role) => this.role = role)
   }

  ngOnInit(): void {
  }

}
