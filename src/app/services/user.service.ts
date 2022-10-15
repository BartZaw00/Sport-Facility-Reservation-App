import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "User";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
     `${environment.apiUrl}/${this.url}`
      );
  }
  public createUser(obj: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(
      `${environment.apiUrl}/${this.url}`, 
      obj
      );
  }
  public updateUser(obj: UserModel): Observable<UserModel[]> {
    return this.http.put<UserModel[]>(
      `${environment.apiUrl}/${this.url}`,
      obj
      );
  }
  public deleteUser(obj: UserModel): Observable<UserModel[]> {
    return this.http.delete<UserModel[]>(
      `${environment.apiUrl}/${this.url}/${obj.iduser}`
      );
  }
}
