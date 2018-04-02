import { Component, OnInit } from '@angular/core';
import { BaseCreationComponent } from '../../shared/abstraction/base.creation.component';
import Customer from '../../shared/models/customer.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerCreationService } from './customer-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-creation',
  templateUrl: './customer-creation.component.html',
  styleUrls: ['./customer-creation.component.scss']
})
export class CustomerCreationComponent extends BaseCreationComponent<Customer> implements OnInit {
  constructor(formBuilder: FormBuilder, toastr: ToastrService, customerService: CustomerCreationService, private router: Router) {
    super(formBuilder, toastr, customerService);
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])]
    });
  }

  validate(): boolean {
    if(!this.formGroup.valid) {

      this.toastr.error("Please fill in all fields.");

      return false;
    }

    return true;
  }
  retrieveData(): Customer {
    let customer = new Customer();

    customer.name = this.formGroup.get('name').value;
    customer.email = this.formGroup.get('email').value;

    return customer;
  }
  afterCreate(item: Customer) {
    this.router.navigate(['/customers', item.id]);
  }
  ngOnAfterDestroy() {
  }
}
