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

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  private customerSub: any;
  private reservationsSub: any;

  private customer: Customer;
  private reservations: Reservation[];

  private items: MenuItem[];

  public formGroup: FormGroup;

  public totalPrice: number;
  public owedPrice: number;

  constructor(private route: ActivatedRoute, private customerDetailService: CustomerDetailService, private formBuilder: FormBuilder, private toastrService: ToastrService, private location: Location, private dateService: DateService) {
    this.createForm();
    this.totalPrice = 0;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.customerSub = this.customerDetailService.getById(id).subscribe(customer => {
      this.customer = customer;
      this.createForm();
    });

    this.reservationsSub = this.customerDetailService.getReservations(id).subscribe(reservations => {
      this.reservations = reservations;
      reservations.forEach((reservation) => {
        this.customerDetailService.getCarForReservation(reservation.id).subscribe(car => {
          reservation.realCar = car;
          this.calculateTotalPrice();
        }
        );
      });
    });

    this.items = [
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete()
        }
      }
    ];
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
  
    return reservation.realCar.pricePerDay * this.dateService.daysBetweenDates(reservation.startDate, reservation.endDate);
  }

  sum(first:number, second:number) {
    return first + second;
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.customer === undefined ? '' : this.customer.name, Validators.required],
      email: [this.customer === undefined ? '' : this.customer.email, Validators.required],
    });
  }

  delete() {
    this.customerDetailService.delete(this.customer.id).subscribe((del) => {
      this.toastrService.success("Customer has been deleted!");
      this.location.back();
    });
  }

  save() {
    if (!this.formGroup.valid) {
      this.toastrService.error("Please fill in all fields");
      return;
    }

    this.customer.email = this.formGroup.get('email').value;
    this.customer.name = this.formGroup.get('name').value;

    this.customerDetailService.saveCustomer(this.customer.id, this.customer).subscribe(
      customer => this.toastrService.success("Customer has been saved!")
    );
  }

  ngOnDestroy() {
    this.customerSub.unsubscribe();
    this.reservationsSub.unsubscribe();
  }
}
