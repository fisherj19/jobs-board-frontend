import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Client {
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  sex: string;
  phone_number: string;
  email_address: string;
  address: string;
  owns_car: boolean;
  has_license: boolean;
  ride_available: boolean;
  status_id: number;
  experience: string;
  job_interests: string;
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
