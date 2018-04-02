import { Component, OnInit } from '@angular/core';
import { ReservationsService } from './reservations.service';
import Reservation from '../../shared/models/reservation.model';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[];

  startDate: Date;
  endDate: Date;

  filtered: boolean;

  constructor(private reservationService: ReservationsService, private dateService: DateService) { 
    this.startDate = new Date();
    this.endDate = new Date();
    this.filtered = false;
  }

  ngOnInit() {
   this.findAll(); 
  }

  findAll() {
    this.reservationService.findAll().subscribe(items => this.reservations = items.map((item) => this.findCarAndCustomer(item)));
  }

  findCarAndCustomer(item: Reservation): Reservation {
    this.reservationService.findCustomer(item.id)
      .subscribe(customer => item.realCustomer = customer);

      this.reservationService.findCar(item.id)
      .subscribe(car => item.realCar = car);

      return item;
  }

  search() {
    this.filtered = true;
    this.reservationService.findByDates(this.startDate, this.endDate).subscribe(items => this.reservations = items.map(item => this.findCarAndCustomer(item)));
  }

  removeFilter() {
    this.filtered = false;
    this.findAll();
  }
}
