import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './layoutComponents/login.component';

// provide only root level paths

// for an entire application there is only 1 route dictionary

const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo:'/customers'},
  {path:'*', pathMatch:"full", redirectTo:'/customers'},
  {path:'login', component: LoginComponent},
  {path:'', pathMatch:"full", redirectTo:'/orders'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
