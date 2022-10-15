import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SportFacilityModel } from '../models/sport-facility';


@Injectable({
  providedIn: 'root'
})
export class SportFacilityService {

  private url = "SportFacility";

  constructor(private http: HttpClient) { }

  public getSportFacilities(): Observable<SportFacilityModel[]> {
    return this.http.get<SportFacilityModel[]>(
     `${environment.apiUrl}/${this.url}`
      );
  }
  public createSportFacility(obj: SportFacilityModel): Observable<SportFacilityModel[]> {
    return this.http.post<SportFacilityModel[]>(
      `${environment.apiUrl}/${this.url}`, 
      obj
      );
  }
  public updateSportFacility(obj: SportFacilityModel): Observable<SportFacilityModel[]> {
    return this.http.put<SportFacilityModel[]>(
      `${environment.apiUrl}/${this.url}`,
      obj
      );
  }
  public deleteSportFacility(obj: SportFacilityModel): Observable<SportFacilityModel[]> {
    return this.http.delete<SportFacilityModel[]>(
      `${environment.apiUrl}/${this.url}/${obj.idsportFacility}`
      );
  }
}
