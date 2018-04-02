import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', loadChildren: './modules/customers.module#CustomersModule' },
  { path: 'customers/:id',  loadChildren: './modules/customers.module#CustomersModule' },  
  { path: 'cars', loadChildren: './modules/cars.module#CarsModule' },
  { path: 'cars/:id', loadChildren: './modules/cars.module#CarsModule' },  
  { path: 'reservations', loadChildren: './modules/reservations.module#ReservationsModule' }
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
