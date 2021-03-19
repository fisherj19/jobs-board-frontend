/**
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CompanyUser, CompanyUserService } from './companyUser.service';

@Component({
  templateUrl: './companyUser.component.html'
})
export class CompanyUserComponent implements OnInit {
  companyUser: CompanyUser[];

  constructor(
    private companyUserService: CompanyUserService, 
    private route: ActivatedRoute,
    private location: Location) 
  { }

  ngOnInit(): void {
    this.getCompanyUser();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyUserService.getCompanyUser(id)
      .subscribe(companyUser => this.companyUser = companyUser);
  }

  goBack(): void {
    this.location.back();
  }
}*/