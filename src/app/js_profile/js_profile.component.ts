import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Client, JsProfileService } from './js-profile.service';

@Component({
  selector: 'app-js_profile',
  templateUrl: './js_profile.component.html',
  styles: [
  ]
})

export class JsProfileComponent implements OnInit {
  ready = false;
  user_info: Client;

  constructor(private router: Router, private authService: AuthService, private jsProfileService: JsProfileService) { }

  ngOnInit(): void {
    const id  = this.authService.u.uid;
    this.jsProfileService.getByID(id).subscribe(user_info => {  
      this.user_info = user_info;
      this.ready = true;
    });
  }

  updateProfile(){
    this.router.navigate(['/applicant'])
  }

}
