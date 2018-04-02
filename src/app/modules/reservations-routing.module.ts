import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from '../components/reservations/reservations.component';
import { ReservationDetailComponent } from '../components/reservation-detail/reservation-detail.component';
import { ReservationCreationComponent } from '../components/reservation-creation/reservation-creation.component';

const routes: Routes = [
  { path: '', component: ReservationsComponent, pathMatch: 'full' },
  { path: 'new', component: ReservationCreationComponent, pathMatch: 'full' },
  { path: ':id', component: ReservationDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);