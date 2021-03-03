import { Component, OnInit } from '@angular/core';

import { Company, CompanyService } from './company.service';

@Component({
  templateUrl: './companies.component.html'
})
export class CompaniesComponent implements OnInit {
  ready = false;
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(companies => {
      this.companies = companies;
      this.ready = true;
    });
  }
}
