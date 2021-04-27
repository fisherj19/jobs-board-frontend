import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addJobService } from './addJob.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 


@Component({
  templateUrl: './addJob.component.html',
  selector: 'app-name-editor',
  //styleUrls: ...
})

export class JobComponent {
    basicForm = this.fb.group({
      companyName: [''],
      jobName: [''],
      jobDescription: [''],
      whoContact: this.fb.group({
          name: [''],
          phoneNumber: [''],
          email: [''],
      }),
      listDate: [''],
      fillDate: ['']
    })

      constructor(private authService: AuthService, private fb: FormBuilder, private addJobService: addJobService, private router: Router){}

      updateAddJob() {
        this.basicForm.patchValue({
          firstName: 'Nancy',
          address:{
            street: '123 Drew Street'
          }
        });
      }
    
      goJobScreen(){
        this.router.navigate(['/job_screen'])
      }
    
      onSubmit(): void {
        const myForm = this.basicForm.value;
        myForm.id = this.authService.u.uid
        this.addJobService.insert(myForm).subscribe(
          () => console.log('success'),
          (err) => console.error(err)
        );
      } 

}
