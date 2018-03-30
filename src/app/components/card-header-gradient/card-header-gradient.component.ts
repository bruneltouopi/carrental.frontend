import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-header-gradient',
  templateUrl: './card-header-gradient.component.html',
  styleUrls: ['./card-header-gradient.component.scss']
})
export class CardHeaderGradientComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  component: string;

  constructor() { }

  ngOnInit() {
  }

}
