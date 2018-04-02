import { NgModule, ModuleWithProviders } from '@angular/core';

import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../components/customers/customers.service';
import { CustomerDetailService } from '../components/customer-detail/customer-detail.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule, Angular2FontawesomeModule],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule,
          providers: [CustomersService, CustomerDetailService]
        };
      }
} 