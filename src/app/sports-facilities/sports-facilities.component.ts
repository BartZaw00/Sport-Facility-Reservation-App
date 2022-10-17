import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SportFacilityModel } from '../models/sport-facility';
import { LoginService } from '../services/login.service';
import { SportFacilityService } from '../services/sport-facility.service';
import { SportFacilityPopUpComponent } from '../sport-facility-pop-up/sport-facility-pop-up.component';


@Component({
  selector: 'app-sports-facilities',
  templateUrl: './sports-facilities.component.html',
  styleUrls: ['./sports-facilities.component.css']
})
export class SportsFacilitiesComponent implements OnInit {

  _sportFacilities: SportFacilityModel[] = [];
  public sportFacility: SportFacilityModel = new SportFacilityModel();
  role: number;
  searchText: any;

  constructor(private _sportFacilityService: SportFacilityService, public loginService: LoginService, private _dialog:MatDialog) {
    this.role = this.loginService.getRole();
    console.log(this.role);
   }

  ngOnInit(): void {
    this.getSportFacilities();
  }

  getSportFacilities(): void{
    this._sportFacilityService
    .getSportFacilities()
    .subscribe(
      {next: (response: SportFacilityModel[]) => {
        this._sportFacilities = response;
      },
     
      error: () => {
             console.log("error")
      }}
     )
   }

   deleteSportFacility(sportFacility: SportFacilityModel){
    this._sportFacilityService.deleteSportFacility(sportFacility)
    .subscribe({
      next: (result:SportFacilityModel[]) => {
        this._sportFacilityService.getSportFacilities();
        window.location.reload(); 
      },
      error: () => {
        console.log("error")
      }
    })
   }

   openSelectedPopUp(sportFacility: SportFacilityModel) {
    console.log(sportFacility);
    this._dialog.open(SportFacilityPopUpComponent);
  }
}

 