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
import {FieldsetModule} from 'primeng/fieldset';

//app
import { AppComponent } from './app.component';

//shared services
import { DateService } from './shared/services/date.service';

//navbar
import { NavbarComponent } from './components/navbar/navbar.component';

//Propietary
import CacheService from './shared/cache/Cache';
import { JsonAndCacheInterceptor } from './shared/services/json-interceptor.service';
import { SharedModule } from './modules/shared.module';
import { CarsService } from './components/cars/cars.service';
import { ReservationsService } from './components/reservations/reservations.service';
import { CarDetailService } from './components/car-detail/car-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelModule,
    SidebarModule,
    ToastrModule.forRoot(),
    FieldsetModule,
    SharedModule.forRoot(),
  ],
  providers: [
    CarsService,
    ReservationsService,
    DateService,
    CacheService,
    CarDetailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonAndCacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
