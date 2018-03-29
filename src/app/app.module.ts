import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe } from '@angular/common';

//toastr
import { ToastrModule } from 'ngx-toastr';

//primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { SplitButtonModule } from 'primeng/splitbutton';

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
import { CustomerDetailService } from './components/customer-detail/customer-detail.service';

//navbar
import { NavbarComponent } from './components/navbar/navbar.component';
import CacheService from './shared/cache/Cache';
import { JsonInterceptor } from './shared/services/json-interceptor.service';


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
    SidebarModule,
    CardModule,
    SplitButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CarsService,
    CustomersService,
    ReservationsService,
    CustomerDetailService,
    DateService,
    CacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
