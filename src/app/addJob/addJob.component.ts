import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addJobService } from './addJob.service';
import { Router } from '@angular/router';


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
      name: [''],
      phoneNumber: [''],
      email: [''],
      listDate: [''],
      fillDate: ['']
    })

      constructor(private fb: FormBuilder, private addJobService: addJobService, private router: Router){}

      updateAddJob() {
        this.router.navigate(['/addJob'])
      }
    
      goJobScreen(){
        this.router.navigate(['/addJob'])
      }
    
      onSubmit(): void {
        const myForm = this.basicForm.value;
        this.addJobService.insert(myForm).subscribe(
          () => console.log('success'),
          (err) => console.error(err)
        );
      } 

}
