import { Component, OnInit } from '@angular/core';
import { BaseCreationComponent } from '../../shared/abstraction/base.creation.component';
import Reservation from '../../shared/models/reservation.model';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReservationCreationService } from './reservation-creation.service';
import { Router } from '@angular/router';
import Customer from '../../shared/models/customer.model';
import Car from '../../shared/models/car.model';

@Component({
  selector: 'app-reservation-creation',
  templateUrl: './reservation-creation.component.html',
  styleUrls: ['./reservation-creation.component.scss']
})
export class ReservationCreationComponent extends BaseCreationComponent<Reservation> implements OnInit {
  public customersSub: any;
  public customers: Customer[];
  public selectedCustomer: Customer;

  public carsSub: any;
  public cars: Car[];
  public selectedCar: Car;

  public startDate: Date;
  public endDate: Date;
  public today: Date;

  private reservationService = (): ReservationCreationService => (this.baseService as ReservationCreationService);
  
  constructor(formBuilder: FormBuilder, toastr: ToastrService, reservationService: ReservationCreationService, private router: Router) {
    super(formBuilder, toastr, reservationService);
    this.startDate = new Date();
    this.endDate = new Date();
    this.today = new Date();
  }

  search() {
    if(this.endDate < this.startDate) {
      this.toastr.error("Your end date should be further away than your start date.");
      return;
    }

    this.carsSub = this.reservationService().findAvailableCars(this.startDate, this.endDate).subscribe(cars => {
      this.cars = cars
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});
    this.search();
    
    this.customersSub = this.reservationService().findCustomers().subscribe(customers => this.customers = customers);
  }

  checkIfSelectedCarIsInArray(): boolean {
    let car = this.cars.find(item => item.id === this.selectedCar.id);
  
    return car !== undefined;
  }

  validate(): boolean {
    if(!this.checkIfSelectedCarIsInArray()) return false;
    if(this.startDate > this.endDate) return false;
    if(this.selectedCar === undefined || this.selectedCustomer === undefined) return false;

    return true;
  }
  retrieveData(): Reservation {
    let reservation = {
      startDate: this.startDate,
      endDate: this.endDate,
      customer: this.selectedCustomer.id,
      car: this.selectedCar.id
    };
    return reservation as Reservation;
  }
  afterCreate(item: Reservation) {
    this.router.navigate(['/reservations', item.id]);
  }

  ngOnAfterDestroy() {
    this.customersSub.unsubscribe();
    this.carsSub.unsubscribe();
  }

}
