import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-js_profile',
  templateUrl: './js_profile.component.html',
  styles: [
  ]
})
export class JsProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateProfile(){
    this.router.navigate(['/applicant'])
  }

}
