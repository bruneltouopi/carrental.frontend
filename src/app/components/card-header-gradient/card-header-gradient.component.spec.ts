import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderGradientComponent } from './card-header-gradient.component';

describe('CardHeaderGradientComponent', () => {
  let component: CardHeaderGradientComponent;
  let fixture: ComponentFixture<CardHeaderGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
