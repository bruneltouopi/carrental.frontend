import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { CarsComponent } from './components/cars/cars.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id',  component: CustomerDetailComponent },  
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id',  component: CarDetailComponent},  
  { path: 'reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
