import { Component, Input, OnInit } from '@angular/core';
import { SportFacilityModel } from '../models/sport-facility';
import { LoginService } from '../services/login.service';
import { SportFacilityService } from '../services/sport-facility.service';


@Component({
  selector: 'app-sports-facilities',
  templateUrl: './sports-facilities.component.html',
  styleUrls: ['./sports-facilities.component.css']
})
export class SportsFacilitiesComponent implements OnInit {

  _sportFacilities: SportFacilityModel[] = [];


  constructor(private _sportFacilityService: SportFacilityService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.getSportFacilities();

  }

  getSportFacilities(): void{
    this._sportFacilityService
    .getSportFacilities()
    .subscribe(
      {next: (response: SportFacilityModel[]) => {
        this._sportFacilities = response
      },
     
      error: () => {
             console.log("error")
      }}
     )
   }
  }
