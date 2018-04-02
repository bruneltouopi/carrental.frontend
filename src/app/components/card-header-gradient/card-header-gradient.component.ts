import { Component, OnInit, Input } from '@angular/core';

class CardHeaderGradientComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  component: string;

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-card-header-gradient',
  templateUrl: './card-header-gradient.component.html',
  styleUrls: ['./card-header-gradient.component.scss']
})
export class CardHeaderGradientComponentCustomers extends CardHeaderGradientComponent {}
@Component({
  selector: 'app-card-header-gradient',
  templateUrl: './card-header-gradient.component.html',
  styleUrls: ['./card-header-gradient.component.scss']
})
export class CardHeaderGradientComponentCars extends CardHeaderGradientComponent {}
@Component({
  selector: 'app-card-header-gradient',
  templateUrl: './card-header-gradient.component.html',
  styleUrls: ['./card-header-gradient.component.scss']
})
export class CardHeaderGradientComponentReservations extends CardHeaderGradientComponent {}