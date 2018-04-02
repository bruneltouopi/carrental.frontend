import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-header-gradient',
  templateUrl: './card-header-gradient.component.html',
  styleUrls: ['./card-header-gradient.component.scss']
})
class CardHeaderGradientComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  component: string;

  constructor() { }

  ngOnInit() {
  }

}


export class CardHeaderGradientComponentCustomers extends CardHeaderGradientComponent {}
export class CardHeaderGradientComponentCars extends CardHeaderGradientComponent {}
export class CardHeaderGradientComponentReservations extends CardHeaderGradientComponent {}