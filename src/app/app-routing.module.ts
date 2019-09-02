import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from './eployee/list-employee.component';
import{CreateEmployeeComponent} from './eployee/create-employee.component'

const appRoutes:Routes=[

  {path:'list',component:ListEmployeeComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'},

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
