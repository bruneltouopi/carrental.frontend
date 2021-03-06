import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Reservation from '../../shared/models/reservation.model';
import { HttpClient } from '@angular/common/http';
import Cache from '../../shared/cache/Cache';
import { Observable } from 'rxjs/Observable';
import Car from '../../shared/models/car.model';
import Customer from '../../shared/models/customer.model';

@Injectable()
export class ReservationDetailService extends BaseService<Reservation> {

  constructor(httpClient: HttpClient) {
    super(httpClient, "reservations");
  }

  getCarForReservation(id: number): Observable<Car> {
    let apiUrl = `${this.apiUrl}${id}/car`;
    return this.getAbsolute<Car>(apiUrl);
  }

  getCustomerForReservation(id: number): Observable<Customer> {
    let apiUrl = `${this.apiUrl}${id}/customer`;
    return this.getAbsolute<Customer>(apiUrl);
  }

  togglePaid(id: number): Observable<Reservation> {
    return this.put(id, new Reservation());
  }
}
