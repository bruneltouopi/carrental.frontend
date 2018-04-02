import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from './car-detail.service';
import Car from '../../shared/models/car.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Reservation from '../../shared/models/reservation.model';
import { MenuItem } from 'primeng/components/common/menuitem';
import { BaseDetailComponent } from '../../shared/abstraction/base.detail.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent extends BaseDetailComponent<Car> implements OnInit {
  private reservations: Reservation[];
  private reservationsSub: any;

  private carDetailService = (): CarDetailService => (this.baseService as CarDetailService);

  constructor(route: ActivatedRoute, carDetailService: CarDetailService, formBuilder: FormBuilder, toastrService: ToastrService, location: Location) {
    super(route, carDetailService, formBuilder, toastrService, location);
  }

  ngOnInit() {
    super.ngOnInit();

    this.reservationsSub = this.carDetailService().getReservations(this.id).subscribe(reservations => {
      this.reservations = reservations;

      reservations.forEach(reservation => {
        this.carDetailService().getCustomerForReservation(reservation.id).subscribe(customer => {
          reservation.realCustomer = customer;
        })
      })
    });

    this.items = [
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete()
        }
      }
    ];
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.item === undefined ? '' : this.item.name, Validators.required],
      pricePerDay: [this.item === undefined ? 0 : this.item.pricePerDay, Validators.required],
    });
  }

  save() {
    super.save();

    this.item.pricePerDay = this.formGroup.get('pricePerDay').value;
    this.item.name = this.formGroup.get('name').value;

    this.carDetailService().saveCar(this.item.id, this.item).subscribe(
      car => this.toastrService.success("Car has been saved!")
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.reservationsSub.unsubscribe();
  }
}
