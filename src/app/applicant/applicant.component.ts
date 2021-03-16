import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  templateUrl: './applicant.component.html',
  selector: 'app-name-editor',
  //styleUrls: ...
})

export class ApplicantComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
    })
  })

  constructor(private fb: FormBuilder){}

  updateName() {
    //this.profileFirstName.setValue('Nancy');
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address:{
        street: '123 Drew Street'
      }
    });
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
