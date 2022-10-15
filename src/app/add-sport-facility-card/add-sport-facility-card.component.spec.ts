import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFacilityCardComponent } from './add-sport-facility-card.component';

describe('SportFacilityCardComponent', () => {
  let component: SportFacilityCardComponent;
  let fixture: ComponentFixture<SportFacilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportFacilityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportFacilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
