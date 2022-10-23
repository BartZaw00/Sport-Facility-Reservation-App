import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { ReservationModel } from '../models/reservation';

@Component({
  selector: 'app-sport-facility',
  templateUrl: './sport-facility.component.html',
  styleUrls: ['./sport-facility.component.css']
})
export class SportFacilityComponent implements OnInit {

  _reservations: ReservationModel[] = [];
  public reservation: ReservationModel = new ReservationModel();
  searchText: any;


  constructor(private _reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
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



  getReservations(): void{
    this._reservationService
    .getReservations()
    .subscribe(
      {next: (response: ReservationModel[]) => {
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

 
