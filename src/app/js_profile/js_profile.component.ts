import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-js_profile',
  templateUrl: './js_profile.component.html',
  styles: [
  ]
})

export class JsProfileComponent implements OnInit {
  ready = false;
  user_info: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  updateProfile(){
    this.router.navigate(['/applicant'])
  }

}
