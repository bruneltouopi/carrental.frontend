import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Reservation from '../../shared/models/reservation.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReservationCreationService extends BaseService<Reservation> {

  constructor(http: HttpClient) {
    super(http, "reservations");
   }

}
