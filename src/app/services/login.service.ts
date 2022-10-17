import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "Login";
  public role: number;
  @Output() roleChanged = new EventEmitter<number>();

  constructor(private http: HttpClient) {
    this.role = this.getRole();
   }

   public loginUser(obj: LoginModel): Observable<LoginModel[]> {
    return this.http.post<LoginModel[]>(
      `${environment.apiUrl}/${this.url}`, 
      obj
      );
  }
  
  public isLogged(){
    return localStorage.getItem('role');
  }

  public setRole(role: number){
    this.role = role;
    this.roleChanged.emit(this.role);
  }

  public getRole(){
    return Number(localStorage.getItem('role'));
  }

  public logOut(){
    localStorage.clear();
    window.location.reload();
  }

}
