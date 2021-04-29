import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/job-screen'])
  }

}
