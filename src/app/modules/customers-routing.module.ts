import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent }   from '../components/customers/customers.component';
import { CustomerDetailComponent }   from '../components/customer-detail/customer-detail.component';
import { CustomerCreationComponent } from '../components/customer-creation/customer-creation.component';


const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'new', component: CustomerCreationComponent, pathMatch: 'full' },
  { path: ':id', component: CustomerDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);