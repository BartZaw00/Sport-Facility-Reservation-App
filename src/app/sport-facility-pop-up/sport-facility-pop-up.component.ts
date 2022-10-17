import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SportFacilityModel } from '../models/sport-facility';
import { SportFacilityService } from '../services/sport-facility.service';

@Component({
  selector: 'app-sport-facility-pop-up',
  templateUrl: './sport-facility-pop-up.component.html',
  styleUrls: ['./sport-facility-pop-up.component.css']
})
export class SportFacilityPopUpComponent implements OnInit {

  @Input() selectedSportFacility?: SportFacilityModel;

  public sportFacility: SportFacilityModel = new SportFacilityModel();

  constructor(private _sportFacilityService: SportFacilityService) { }

  ngOnInit(): void {
    console.log(this.selectedSportFacility)
  }

  createSportFacility(sportFacility: SportFacilityModel){
       this._sportFacilityService.createSportFacility(sportFacility)
       .subscribe({
        next: (result: SportFacilityModel[]) => {
          this._sportFacilityService.getSportFacilities();
          window.location.reload();
        },
       
        error: () => {
               console.log("error")
        }
        
       })
     }

     editSportFacility(sportFacility: SportFacilityModel){
      this._sportFacilityService.updateSportFacility(sportFacility)
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

}
