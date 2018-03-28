import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {SidebarModule} from 'primeng/sidebar';
import {CalendarModule} from 'primeng/calendar';

//app
import { AppComponent } from './app.component';

//shared services
import { DateService } from './shared/services/date.service';

//cars
import { CarsComponent } from './components/cars/cars.component';
import { CarsService } from './components/cars/cars.service';

//customers
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersService } from './components/customers/customers.service';

//reservations
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationsService } from './components/reservations/reservations.service';

//customer-detail
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

//navbar
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CustomersComponent,
    ReservationsComponent,
    CustomerDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    PanelModule,
    SidebarModule
  ],
  providers: [
    CarsService,
    CustomersService,
    ReservationsService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
