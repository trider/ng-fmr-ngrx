import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch:'full'},
  { path:'users', component: UsersComponent},
  { path:'orders/:id', component: UserOrdersComponent}
];
