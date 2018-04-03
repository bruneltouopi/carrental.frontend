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

  public car: Car;
  private carSub: any;

  public customer: Customer;
  private customerSub: any;

  private paidSub: any;

  private reservationDetailService = (): ReservationDetailService => (this.baseService as ReservationDetailService);

  constructor(route: ActivatedRoute, reservationDetailService: ReservationDetailService, formBuilder: FormBuilder, toastrService: ToastrService, location: Location) {
    super(route, reservationDetailService, formBuilder, toastrService, location);
    this.item = new Reservation();    
  }

  ngOnInit() {
    super.ngOnInit();

    
    this.setDropdown();

    this.carSub = this.reservationDetailService().getCarForReservation(this.id).subscribe(car => this.car = car);
    this.customerSub = this.reservationDetailService().getCustomerForReservation(this.id).subscribe(customer => this.customer = customer);
  }

  setDropdown() {
    this.items = [{
      label: this.item.paid ? 'Paid' : 'Not Paid', icon:  this.item.paid ? 'fa-check' : 'fa-close', command: () => {
        this.togglePaid()
      }
    }];
  }

  createForm() {

  }

  togglePaid() {
    this.reservationDetailService().togglePaid(this.id).subscribe(reservation => {
      this.item = reservation;
      this.toastrService.success(`Reservation #${reservation.id} is now marked as ${reservation.paid ? "paid" : "not paid"}.`);
      this.setDropdown();
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.customerSub.unsubscribe();
    this.carSub.unsubscribe();

    if (this.paidSub !== undefined)
      this.paidSub.unsubscribe();
  }
}
