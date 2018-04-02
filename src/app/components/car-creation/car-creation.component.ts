import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseCreationComponent } from '../../shared/abstraction/base.creation.component';
import Car from '../../shared/models/car.model';
import { CarCreationService } from './car-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-creation',
  templateUrl: './car-creation.component.html',
  styleUrls: ['./car-creation.component.scss']
})
export class CarCreationComponent extends BaseCreationComponent<Car> implements OnInit {
  constructor(formBuilder: FormBuilder, toastr: ToastrService, carService: CarCreationService, private router: Router) {
    super(formBuilder, toastr, carService);
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      pricePerDay: [0, Validators.compose([Validators.required, Validators.min(0.01)])]
    });
  }

  validate():boolean {
    if(!this.formGroup.valid) {

      this.toastr.error("Please fill in all fields.");

      return false;
    }

    return true;
  }

  retrieveData(): Car {
    let car = new Car();

    car.name = this.formGroup.get('name').value;
    car.pricePerDay = this.formGroup.get('pricePerDay').value;

    return car;
  }

  afterCreate(item: Car) {
    this.router.navigate(['/cars', item.id]);
  }

  ngOnAfterDestroy() {
  }
}
