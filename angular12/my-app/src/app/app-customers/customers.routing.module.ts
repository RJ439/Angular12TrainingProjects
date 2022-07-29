import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { CustomersComponent } from './customers.component';

// provide only root level paths

// for an entire application there is only 1 route dictionary

const routes: Routes = [
  {path:'customers', component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
