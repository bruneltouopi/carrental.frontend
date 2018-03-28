import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Customer from '../../shared/models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  private id: number;
  private sub: any;

  private customer: Customer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
