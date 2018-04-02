import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreationComponent } from './reservation-creation.component';

describe('ReservationCreationComponent', () => {
  let component: ReservationCreationComponent;
  let fixture: ComponentFixture<ReservationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
