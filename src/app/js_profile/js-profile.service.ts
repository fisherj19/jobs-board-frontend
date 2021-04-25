import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Client {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  sex: string;
  support_contact: string;
  phone_number: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email_address: string;
  job_1: string;
  empl_1: string;
  job_2: string;
  empl_2: string;
  job_3: string;
  empl_3: string;
  owns_car: boolean;
  has_license: boolean;
  ride_available: boolean;
  job_interests: string;
  status_id: number;
  skills: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsProfileService {
  private server = environment.server;

  constructor(private http: HttpClient) { }

  getByID(userId: string): Observable<Client> {
    return this.http.get<Client>(`${this.server}/api/jobseeker_users/${userId}`);
  }
}
