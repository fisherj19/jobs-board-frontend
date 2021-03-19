/**
import { Component, OnInit } from '@angular/core';
import { CompanyUser } from '../companyUser.component';
import { CompanyUserService } from '../companyUser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: CompanyUser[] = [];

  constructor(private companyUserService: CompanyUserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.companyUserService.getHeroes()
      .subscribe(companyUser => this.companyUser = companyUser.slice(1, 5));
  }
} */