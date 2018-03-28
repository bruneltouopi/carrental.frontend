import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import Car from '../../shared/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.findAll().subscribe(items => this.cars = items);
  }

}
