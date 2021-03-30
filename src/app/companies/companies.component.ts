import { Component, OnInit } from '@angular/core';

import { Company, CompanyService } from './companies.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: './companies.component.html'
})
export class CompaniesComponent implements OnInit {
  ready = false;
  companies: Company[];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(companies => {
      this.companies = companies;
      this.ready = true;
    });
  }

  updateProfile(){
    this.router.navigate(['/js_profile'])
  }
}
