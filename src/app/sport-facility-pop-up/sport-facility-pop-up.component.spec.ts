import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFacilityPopUpComponent } from './sport-facility-pop-up.component';

describe('SportFacilityPopUpComponent', () => {
  let component: SportFacilityPopUpComponent;
  let fixture: ComponentFixture<SportFacilityPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportFacilityPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportFacilityPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
