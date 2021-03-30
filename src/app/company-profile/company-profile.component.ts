import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styles: [
  ]
})
export class CompanyProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateCompanyProfile(){
    this.router.navigate(['/companies'])
  }

}
