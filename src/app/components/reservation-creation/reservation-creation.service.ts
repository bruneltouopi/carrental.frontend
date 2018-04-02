import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Reservation from '../../shared/models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Car from '../../shared/models/car.model';
import Customer from '../../shared/models/customer.model';

@Injectable()
export class ReservationCreationService extends BaseService<Reservation> {

  constructor(http: HttpClient) {
    super(http, "reservations");
   }

   findAvailableCars(startDate: Date, endDate: Date): Observable<Car[]> {
      return this.getAbsolute<Car[]>(`${this.apiUrl}../cars/${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}/${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`);
   }

   findCustomers(): Observable<Customer[]> {
     return this.getAbsolute<Customer[]>(`${this.apiUrl}../customers`);
   }
}
