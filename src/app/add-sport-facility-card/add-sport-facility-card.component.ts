import { Component, Input, OnInit } from '@angular/core';
import { SportFacilityModel } from '../models/sport-facility';
import { SportFacilityService } from '../services/sport-facility.service';
import { MatDialog } from '@angular/material/dialog';
import { SportFacilityPopUpComponent } from '../sport-facility-pop-up/sport-facility-pop-up.component';

@Component({
  selector: 'app-sport-facility-card',
  templateUrl: './add-sport-facility-card.component.html',
  styleUrls: ['./add-sport-facility-card.component.css']
})
export class SportFacilityCardComponent implements OnInit {

  

  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  openPopUp(){
    this._dialog.open(SportFacilityPopUpComponent);
  }
  
}
