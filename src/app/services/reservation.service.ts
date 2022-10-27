import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReservationModel } from '../models/reservation';
import { ReservationWithDetailsModel } from '../models/reservationWithDetails';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = "Reservation";

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(
     `${environment.apiUrl}/${this.url}/reservations`
      );
  }
  public getReservationsWithDetails(): Observable<ReservationWithDetailsModel[]> {
    return this.http.get<ReservationWithDetailsModel[]>(
     `${environment.apiUrl}/${this.url}/reservationsWithDetails`
      );
  }
  public createReservation(obj: ReservationModel): Observable<ReservationModel[]> {
    return this.http.post<ReservationModel[]>(
      `${environment.apiUrl}/${this.url}`, 
      obj
      );
  }
  public updateReservation(obj: ReservationModel): Observable<ReservationModel[]> {
    return this.http.put<ReservationModel[]>(
      `${environment.apiUrl}/${this.url}`,
      obj
      );
  }
  public deleteReservation(obj: ReservationModel): Observable<ReservationModel[]> {
    return this.http.delete<ReservationModel[]>(
      `${environment.apiUrl}/${this.url}/${obj.idreservation}`
      );
  }
}
