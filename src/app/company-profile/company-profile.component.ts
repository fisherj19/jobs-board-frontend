import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styles: [
  ]
})
export class CompanyProfileComponent {
  comanyForm = this.fb.group({
    companyDes: [''],
      fname: [''],
      lname: [''],
      number:[''],
      email:[''],
      street: [''],
      city: [''],
      state:[''],
      zip:[''],
      neighborhood:['']
  })
 

  constructor(private fb: FormBuilder) { }

  

}
