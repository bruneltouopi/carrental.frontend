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

  constructor(private reservationService: ReservationsService, private dateService: DateService) { 
    this.startDate = new Date();
    this.endDate = new Date();
  }

  ngOnInit() {
    this.reservationService.findAll().subscribe(items => this.reservations = items);
  }

  search() {;
    console.log(this.startDate);
    console.log(this.endDate);
    this.reservationService.findByDates(this.startDate, this.endDate).subscribe(items => this.reservations = items);
  }
}
