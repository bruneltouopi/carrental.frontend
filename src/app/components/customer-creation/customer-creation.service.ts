import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Customer from '../../shared/models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerCreationService extends BaseService<Customer> {

  constructor(http: HttpClient) {
    super(http, "customers");
  }

}
