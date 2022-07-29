import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { AuthorizeAdminGuard } from '../security-guards/authorize.admin.guard';

// provide only root level paths

// for an entire application there is only 1 route dictionary

const routes: Routes = [
  {path:'orders', component:OrdersComponent, canActivate: [AuthorizeAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
