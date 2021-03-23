import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JobseekerService } from './jobseeker_applicant.service';

@Component({
  templateUrl: './jobseeker_applicant.component.html',
  selector: 'app-name-editor',
  //styleUrls: ...
})

export class ApplicantComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    dateOfBirth: [''],
    gender: [''],
    phone_number: [''],
    email_address: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    has_license: [''],
    owns_car: [''],
    ride_available: [''],
    status_id: [''],
    skills: [''],
    support_contact: [''],
    job_interests: ['']
  });
  
  constructor(private fb: FormBuilder, private jobseekerService: JobseekerService){}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address:{
        street: '123 Drew Street'
      }
    });
  }

  onSubmit(): void {
    const myForm = this.profileForm.value;
    this.jobseekerService.insert(myForm).subscribe(
      () => console.log('success'),
      (err) => console.error(err)
    );
  }
}
