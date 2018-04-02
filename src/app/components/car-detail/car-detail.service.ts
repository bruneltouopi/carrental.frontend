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
  constructor(httpClient: HttpClient) {
    super(httpClient, "cars");
  }

  getReservations(id: number): Observable<Reservation[]> {
    return this.getAbsolute(`${this.apiUrl}${id}/reservations`);
  }

  saveCar(id: number, car: Car): Observable<Car> {
    let clone = JSON.parse(JSON.stringify(car)) as Car;
    delete clone.reservations;

    return this.put(id, clone);
  }

  getCustomerForReservation(id: number): Observable<Customer> {
    let apiUrl = `${this.apiUrl}../reservations/${id}/customer`;
    return this.getAbsolute<Customer>(apiUrl);
  }
}
