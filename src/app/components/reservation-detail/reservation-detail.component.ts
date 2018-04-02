import { Component, OnInit } from '@angular/core';
import { BaseDetailComponent } from '../../shared/abstraction/base.detail.component';
import Reservation from '../../shared/models/reservation.model';
import { ReservationDetailService } from './reservation-detail-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Car from '../../shared/models/car.model';
import Customer from '../../shared/models/customer.model';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent extends BaseDetailComponent<Reservation> implements OnInit {

  private car: Car;
  private carSub: any;

  private customer: Customer;
  private customerSub: any;

  private reservationDetailService = (): ReservationDetailService => (this.baseService as ReservationDetailService);

  constructor(route: ActivatedRoute, reservationDetailService: ReservationDetailService, formBuilder: FormBuilder, toastrService: ToastrService, location: Location) {
    super(route, reservationDetailService, formBuilder, toastrService, location);
  }

  ngOnInit() {
    super.ngOnInit();

    this.carSub = this.reservationDetailService().getCarForReservation(this.id).subscribe(car => this.car = car);
    this.customerSub = this.reservationDetailService().getCustomerForReservation(this.id).subscribe(customer => this.customer = customer);
  } 

  createForm() {
    
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.customerSub.unsubscribe();
    this.carSub.unsubscribe();
  }
}
