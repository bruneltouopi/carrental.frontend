import { NgModule } from '@angular/core';

import { CustomersComponent } from '../components/customers/customers.component';
import { routing } from './customers-routing.module';
import { CustomerDetailComponent } from '../components/customer-detail/customer-detail.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CardHeaderGradientComponentCustomers } from '../components/card-header-gradient/card-header-gradient.component';
import { SharedModule } from 'primeng/components/common/shared';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonAndCacheInterceptor } from '../shared/services/json-interceptor.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        CardModule,
        TableModule,
        Angular2FontawesomeModule,
        FieldsetModule,
        FormsModule,
        ReactiveFormsModule,
        SplitButtonModule,

    ],
    declarations: [
        CardHeaderGradientComponentCustomers,
        CustomersComponent,
        CustomerDetailComponent
    ]
})
export class CustomersModule { }