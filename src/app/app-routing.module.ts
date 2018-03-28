import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { CarsComponent } from './components/cars/cars.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'customers/:id',  component: CustomerDetailComponent}
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
