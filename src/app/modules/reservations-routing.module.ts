import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from '../components/reservations/reservations.component';

const routes: Routes = [
  { path: '', component: ReservationsComponent, pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);