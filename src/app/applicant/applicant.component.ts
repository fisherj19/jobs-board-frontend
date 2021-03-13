import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './applicant.component.html',

  selector: 'app-name-editor',
  //styleUrls: ...
})
export class ApplicantComponent {
  profileName = new FormControl('');
}
