import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesComponent } from './companies.component';

import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
