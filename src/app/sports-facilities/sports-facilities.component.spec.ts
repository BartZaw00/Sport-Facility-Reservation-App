import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFacilitiesComponent } from './sports-facilities.component';

describe('SportsFacilitiesComponent', () => {
  let component: SportsFacilitiesComponent;
  let fixture: ComponentFixture<SportsFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
