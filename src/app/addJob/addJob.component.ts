import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JobseekerService } from './jobseeker_applicant.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 


@Component({
  templateUrl: './addJob.component.html',
  selector: 'app-name-editor',
  //styleUrls: ...
})



export class ApplicantComponent {
    basicForm = this.fb.group({
      companyName: [''],
      jobName: [''],
      jobDescription: [''],
      whoContact = this.fb.group({
        name: [''],
      phoneNumber: [''],
      email: [''],
      }),
      listDate: [''],
      fillDate: ['']
    })

      constructor(private authService: AuthService, private fb: FormBuilder, private jobseekerService: JobseekerService, private router: Router){}
}