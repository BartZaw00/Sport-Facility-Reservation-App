import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DateFormatterParams, DAYS_OF_WEEK } from 'angular-calendar';
import { ReservationModel } from '../models/reservation';
import { ReservationWithDetailsModel } from '../models/reservationWithDetails';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  
  _reservations: ReservationWithDetailsModel[] = [];
  public reservation: ReservationModel = new ReservationModel();
  searchText: any;


  constructor(private _reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservationsWithDetails();
  }

  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

  events: CalendarEvent[] = [];

  locale: string = 'pl';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'HH:mm', 'fr');
  }

  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return this.dayViewHour({ date, locale });
  }



  getReservationsWithDetails(): void{
    this._reservationService
    .getReservationsWithDetails()
    .subscribe(
      {next: (response: ReservationWithDetailsModel[]) => {
        this._reservations = response;
        console.log(this._reservations);
      },
     
      error: () => {
             console.log("error")
      }}
     )
   }

   createReservation(reservation: ReservationModel){
    this._reservationService.createReservation(reservation)
    .subscribe({
     next: (result: ReservationModel[]) => {
       this._reservationService.getReservations();
       this._reservationService.getReservationsWithDetails();
       window.location.reload();
     },
    
     error: () => {
            console.log("error")
     }
     
    })
  }

  editReservation(reservation: ReservationModel){
    this._reservationService.updateReservation(reservation)
    .subscribe({
      next: (result:ReservationModel[]) => {
        this._reservationService.getReservations();
        window.location.reload(); 
      },
      error: () => {
        console.log("error")
      }
    })
   }

   deleteReservation(reservation: ReservationModel){
    this._reservationService.deleteReservation(reservation)
    .subscribe({
      next: (result:ReservationModel[]) => {
        this._reservationService.getReservations();
        window.location.reload(); 
      },
      error: () => {
        console.log("error")
      }
    })
   }
}
