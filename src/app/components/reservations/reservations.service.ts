import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Reservation from '../../shared/models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReservationsService extends BaseService<Reservation> {
  constructor(http: HttpClient) {
    super(http, "reservations");
   }

   findAll(): Observable<Reservation[]> {
    return this.get();
   }

   findById(id: number): Observable<Reservation> {
    return this.getById(id);
   }

   findByDates(startDate: Date, endDate: Date) : Observable<Reservation[]> {
     let url = `${this.apiUrl}${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}/${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
     console.log(url);
     return this.getAbsolute<Reservation[]>(url);
   }
}
