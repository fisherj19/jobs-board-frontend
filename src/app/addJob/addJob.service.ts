import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Company {
  companyName: string;
  jobName: string;
  jobDescription: string;
  name: string;
  phoneNumber: number;
  email: string;
  listDate: Date;
  fillDate: Date;
}