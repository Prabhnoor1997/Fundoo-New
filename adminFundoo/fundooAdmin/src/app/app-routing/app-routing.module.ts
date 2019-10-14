import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../auth.guard'
//import { HomeComponent } from './home';
import { LoginComponent } from '../componenets/login/login.component'
import {DashboardComponent} from '../componenets/dashboard/dashboard.component'

//import { AuthGuard } from './_guards';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes : Routes =[
  {path:'login', component:LoginComponent},
  {path:'', component:DashboardComponent,canActivate:[AuthGuard] },
  {path:'**', redirectTo:''}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }