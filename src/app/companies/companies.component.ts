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

  goCompanyProfilePage(){
    this.router.navigate(['/company-profile'])
  }

	newPage(c: any){
		document.getElementById("company_profile").style.display = "inline";
		var theframe = document.getElementById("frame") as HTMLIFrameElement;
		theframe.onload = function() {
			theframe.contentWindow.document.getElementById("c_prof_name").innerText = c.name;
			theframe.contentWindow.document.getElementById("c_prof_desc").innerText = "Description: \n" + c.company_description;
			theframe.contentWindow.document.getElementById("c_prof_est").innerText = "Year Established: \n";

			theframe.contentWindow.document.getElementById("c_prof_phone").innerText = "Phone: " + c.primary_phone;
			theframe.contentWindow.document.getElementById("c_prof_email").innerText = "Email: " + c.primary_email;

			theframe.contentWindow.document.getElementById("c_prof_address").innerText = c.address1;
			theframe.contentWindow.document.getElementById("c_prof_city").innerText = "City: " + c.city;
			theframe.contentWindow.document.getElementById("c_prof_state").innerText = "State: " + c.state;
			theframe.contentWindow.document.getElementById("c_prof_zip").innerText = "Zipcode: " + c.zipcode;

			theframe.contentWindow.document.getElementById("back_button").style.display = "none";

		}
		theframe.setAttribute("src", "company-profile");
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
		btn.onclick = this.newPage;

		document.getElementById("buttons").appendChild(btn);
	}
  }
}
