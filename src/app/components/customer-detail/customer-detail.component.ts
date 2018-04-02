import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Customer from '../../shared/models/customer.model';
import { CustomerDetailService } from './customer-detail.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import Reservation from '../../shared/models/reservation.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { DateService } from '../../shared/services/date.service';
import { BaseDetailComponent } from '../../shared/abstraction/base.detail.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent extends BaseDetailComponent<Customer> implements OnInit {
  private reservationsSub: any;
  private reservations: Reservation[];

  public totalPrice: number;
  public owedPrice: number;

  constructor(route: ActivatedRoute, customerDetailService: CustomerDetailService, formBuilder: FormBuilder, toastrService: ToastrService, location: Location, private dateService: DateService) {
    super(route, customerDetailService, formBuilder, toastrService, location);
    this.totalPrice = 0;
    this.owedPrice = 0;
  }

  customerDetailService = ():CustomerDetailService => (this.baseService as CustomerDetailService);

  ngOnInit() {
    super.ngOnInit();

    this.reservationsSub = this.customerDetailService().getReservations(this.id).subscribe(reservations => {
      this.reservations = reservations;
      reservations.forEach((reservation) => {
        this.customerDetailService().getCarForReservation(reservation.id).subscribe(car => {
          reservation.realCar = car;
          this.calculateTotalPrice();
        }
        );
      });
    });
  }

  calculateTotalPrice() {
    if (this.reservations === undefined) return 0;

    let prices = this.reservations.map((reservation) => this.mapPrice(reservation, true));
    let owedPrices = this.reservations.map((reservation) => this.mapPrice(reservation, false));
    
    this.totalPrice = prices.reduce(this.sum, 0);
    this.owedPrice = owedPrices.reduce(this.sum, 0);
  }

  mapPrice(reservation: Reservation, includePaid: boolean): number {
    if((reservation.paid && !includePaid) || reservation.realCar === null) return 0;
  
    return (reservation.realCar === undefined ? 0 : reservation.realCar.pricePerDay) * this.dateService.daysBetweenDates(reservation.startDate, reservation.endDate);
  }

  sum(first:number, second:number) {
    return first + second;
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.item === undefined ? '' : this.item.name, Validators.required],
      email: [this.item === undefined ? '' : this.item.email, Validators.required],
    });
  }

  save() {
    super.save();

    this.item.email = this.formGroup.get('email').value;
    this.item.name = this.formGroup.get('name').value;

    this.customerDetailService().saveCustomer(this.item.id, this.item).subscribe(
      customer => this.toastrService.success("Customer has been saved!")
    );
  }

  delete() {
    super.delete();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.reservationsSub.unsubscribe();
  }
}
