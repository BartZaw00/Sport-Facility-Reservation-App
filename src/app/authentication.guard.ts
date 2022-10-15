import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

constructor(private _loginService: LoginService, private _router: Router){}

  canActivate(): boolean{
    if(this._loginService.isLogged()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
  }  
  
  
}
