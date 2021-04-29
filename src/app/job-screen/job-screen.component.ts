import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-job-screen',
  templateUrl: './job-screen.component.html',
  styles: [
  ]
})
export class JobScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateAddJob(){
    this.router.navigate(['/addJob'])
  }
}
