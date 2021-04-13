import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JobseekerService } from './jobseeker_applicant.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  templateUrl: './jobseeker_applicant.component.html',
  selector: 'app-name-editor',
  //styleUrls: ...
})

export class ApplicantComponent {
  profileForm = this.fb.group({
    id: [''],
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
    experience: this.fb.group({
      pos1: [''],
      comp1: [''],
      pos2: [''],
      comp2: [''],
      pos3: [''],
      comp3: ['']
    }),
    skills: [''],
    job_interests: ['']
  });
  
  constructor(private authService: AuthService, private fb: FormBuilder, private jobseekerService: JobseekerService, private router: Router){}

  goProfilePage(){
    this.router.navigate(['/js_profile'])
  }

  onSubmit(): void {
    const myForm = this.profileForm.value;
    myForm.id = this.authService.u.uid;
    this.jobseekerService.update(myForm).subscribe(
      () => console.log('success'),
      (err) => console.error(err)
    );
  }
}

