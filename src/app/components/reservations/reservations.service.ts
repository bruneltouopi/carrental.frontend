import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Reservation from '../../shared/models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Customer from '../../shared/models/customer.model';
import Car from '../../shared/models/car.model';
import Cache from '../../shared/cache/Cache';

@Injectable()
export class ReservationsService extends BaseService<Reservation> {
  constructor(http: HttpClient, cache: Cache) {
    super(http, cache, "reservations");
   }

   findAll(): Observable<Reservation[]> {
    return this.get();
   }

   findById(id: number): Observable<Reservation> {
    return this.getById(id);
   }

   findCar(id: number): Observable<Car> {
    return this.getAbsolute<Car>(`${this.apiUrl}${id}/car`);
  }

   findCustomer(id: number): Observable<Customer> {
     return this.getAbsolute<Customer>(`${this.apiUrl}${id}/customer`);
   }

   findByDates(startDate: Date, endDate: Date) : Observable<Reservation[]> {
     let url = `${this.apiUrl}${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}/${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
     return this.getAbsolute<Reservation[]>(url);
   }
}
