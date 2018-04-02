import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Customer from '../../shared/models/customer.model';
import { HttpClient } from '@angular/common/http';
import Cache from '../../shared/cache/Cache';
import { Observable } from 'rxjs/Observable';
import Reservation from '../../shared/models/reservation.model';
import Car from '../../shared/models/car.model';


@Injectable()
export class CustomerDetailService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http, "customers");
  }

  getReservations(id: number): Observable<Reservation[]> {
    return this.getAbsolute(`${this.apiUrl}${id}/reservations`);
  }

  saveCustomer(id: number, customer: Customer): Observable<Customer> {
    let clone = JSON.parse(JSON.stringify(customer)) as Customer;
    delete clone.reservations;

    return this.put(id, clone);
  }

  getCarForReservation(id: number): Observable<Car> {
    let apiUrl = `${this.apiUrl}../reservations/${id}/car`;
    return this.getAbsolute<Car>(apiUrl);
  }
}
