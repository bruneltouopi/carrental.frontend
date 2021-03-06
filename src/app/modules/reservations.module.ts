import { NgModule } from '@angular/core';

import { routing } from './reservations-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CardHeaderGradientComponentReservations } from '../components/card-header-gradient/card-header-gradient.component';
import { SharedModule } from 'primeng/components/common/shared';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonInterceptor } from '../shared/services/json-interceptor.service';
import { ReservationsComponent } from '../components/reservations/reservations.component';
import { CalendarModule } from 'primeng/calendar';
import { ReservationDetailComponent } from '../components/reservation-detail/reservation-detail.component';
import { ReservationsService } from '../components/reservations/reservations.service';
import { ReservationDetailService } from '../components/reservation-detail/reservation-detail-service.service';
import { ReservationCreationComponent } from '../components/reservation-creation/reservation-creation.component';
import CacheService from '../shared/cache/Cache';
import { ReservationCreationService } from '../components/reservation-creation/reservation-creation.service';
import {DropdownModule} from 'primeng/dropdown';

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
        CalendarModule,
        DropdownModule
    ],
    declarations: [
        CardHeaderGradientComponentReservations,
        ReservationsComponent,
        ReservationDetailComponent,
        ReservationCreationComponent
    ],
    providers: [
        ReservationsService,
        ReservationDetailService,
        ReservationCreationService
    ]
})
export class ReservationsModule { }