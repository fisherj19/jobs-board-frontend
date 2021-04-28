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
    this.createList();
  }

  goCompanyProfilePage(){
    this.router.navigate(['/company-profile'])
  }

  createList(){
	for(var i=0;i<2;i++){
		var str = document.createElement("p");
		var img = document.createElement("img");
		var btn = document.createElement("button");

		str.innerText = "company name";
		str.setAttribute("id", "button_text");
		str.setAttribute("class", "center");

		img.src = "assets/profile_picture.png";
		img.setAttribute("id", "button_img");

		btn.setAttribute("id", "comp_button");
		btn.appendChild(str);
		btn.appendChild(img);
		btn.onclick = 
		function newPage(){
			document.getElementById("frame").setAttribute("src", "company-profile");
		}

		document.getElementById("buttons").appendChild(btn);
	}
  }
}
