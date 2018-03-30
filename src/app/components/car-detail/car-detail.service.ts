import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Car from '../../shared/models/car.model';
import { HttpClient } from '@angular/common/http';
import Cache from '../../shared/cache/Cache';
import { Observable } from 'rxjs/Observable';
import Reservation from '../../shared/models/reservation.model';
import Customer from '../../shared/models/customer.model';

@Injectable()
export class CarDetailService extends BaseService<Car> {
  constructor(httpClient: HttpClient, cache: Cache) {
    super(httpClient, cache, "cars");
  }

  getReservations(id: number): Observable<Reservation[]> {
    return this.getAbsolute(`${this.apiUrl}${id}/reservations`);
  }

  getCustomerForReservation(id: number): Observable<Customer> {
    let apiUrl = `${this.apiUrl}../reservations/${id}/customer`;
    return this.getAbsolute<Customer>(apiUrl);
  }
}
