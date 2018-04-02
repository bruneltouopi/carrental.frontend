import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from '../components/cars/cars.component';
import { CarDetailComponent } from '../components/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', component: CarsComponent, pathMatch: 'full' },
  { path: ':id', component: CarDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);