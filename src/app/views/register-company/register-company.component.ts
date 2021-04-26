import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from 'src/app/companies/companies.service';

import { AuthService } from '../../services/auth.service';
import { Message, MessageService } from '../../services/message.service';

@Component({
  templateUrl: './register-company.component.html',
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterCompanyComponent implements OnInit {
  email: string;
  regForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: string,
    private readonly authService: AuthService,
    private readonly msgService: MessageService,
    private readonly formBuilder: FormBuilder
  ) { }

  get emailFld() { return this.regForm.get('primary_email'); }
  get name() { return this.regForm.get('name'); }
  get password() { return this.regForm.get('password'); }

  ngOnInit() {
    this.email = this.data;
    this.regForm = this.formBuilder.group({
      primary_email: [this.email, [Validators.required, Validators.email, Validators.maxLength(75)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formValues = this.regForm.value;
    const company: Company = {
      id: '',
      name: formValues.name,
      primary_first_name: '',
      primary_last_name: '',
      primary_phone: '',
      primary_email: formValues.primary_email,
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip_code: '',
      neighborhood_id: 1,
    };
    this.authService.createCompany(company, this.regForm.value.password).then(
      (rtn: Message) => {
        const title = rtn.success ? 'Success!' : 'Error Saving New Registration';
        this.msgService.publish({ ...rtn, title });
        this.dialogRef.close();
      }
    );
  }
}
