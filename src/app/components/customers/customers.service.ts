import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import { HttpClient } from '@angular/common/http';
import Customer from '../../shared/models/customer.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http, "customers");
  }

  findAll() : Observable<Customer[]> {
    return this.get();
  }
}
