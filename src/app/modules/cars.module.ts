import { NgModule } from '@angular/core';

import { routing } from './cars-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CardHeaderGradientComponentCars } from '../components/card-header-gradient/card-header-gradient.component';
import { SharedModule } from 'primeng/components/common/shared';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonInterceptor } from '../shared/services/json-interceptor.service';
import { CarsComponent } from '../components/cars/cars.component';
import { CarDetailComponent } from '../components/car-detail/car-detail.component';
import { CarsService } from '../components/cars/cars.service';
import { CarDetailService } from '../components/car-detail/car-detail.service';
import { CarCreationComponent } from '../components/car-creation/car-creation.component';
import CacheService from '../shared/cache/Cache';

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
        CardHeaderGradientComponentCars,
        CarsComponent,
        CarDetailComponent,
        CarCreationComponent
    ],
    providers: [
        CarsService,
        CarDetailService
    ]
})
export class CarsModule { }