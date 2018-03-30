import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Observable } from 'rxjs/Observable';
import Customer from '../../shared/models/customer.model';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.findAll().subscribe(items => this.customers = items);
  }

}
