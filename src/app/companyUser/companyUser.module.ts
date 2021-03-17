import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyUserComponent } from './companyUser.component';

import { CompanyUserRoutingModule } from './companyUser-routing.module';

@NgModule({
  declarations: [CompanyUserComponent],
  imports: [
    CommonModule,
    CompanyUserRoutingModule
  ]
})
export class CompanyUserModule { }
