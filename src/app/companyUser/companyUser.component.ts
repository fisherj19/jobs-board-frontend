import { Component, OnInit } from '@angular/core';

import { CompanyUser, CompanyUserService } from './companyUser.service';

@Component({
  templateUrl: './companyUser.component.html'
})
export class CompanyUserComponent implements OnInit {
  ready = false;
  companyUser: CompanyUser[];

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit(): void {
    this.companyUserService.getAll().subscribe(companyUser => {
      this.companyUser = companyUser;
      this.ready = true;
    });
  }
}
