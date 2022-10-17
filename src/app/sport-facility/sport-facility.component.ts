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

@Component({
  selector: 'app-sport-facility',
  templateUrl: './sport-facility.component.html',
  styleUrls: ['./sport-facility.component.css']
})
export class SportFacilityComponent implements OnInit {

  ngOnInit(): void {
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
}

 
