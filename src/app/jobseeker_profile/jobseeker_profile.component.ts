import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, JobseekerProfileService } from './jobseeker-profile.service';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-js_profile',
  templateUrl: './jobseeker_profile.component.html',
  styles: [
  ]
})

export class JsProfileComponent implements OnInit {
  ready = false;
  user_info: Client[];

  constructor(private router: Router, private jsProfileService: JobseekerProfileService) { }

  ngOnInit(): void {
    this.jsProfileService.getByID().subscribe(user_info => {
      this.user_info = user_info;
      this.ready = true;
    });
  }

  updateProfile(){
    this.router.navigate(['/applicant'])
  }

}
