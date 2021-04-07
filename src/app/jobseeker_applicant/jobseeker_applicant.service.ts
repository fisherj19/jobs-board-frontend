import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  support_contact: string;
  phone_number: string;
  address: string;
  email_address: string;
  experience: string;
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
export class JobseekerService {
  private server = environment.server;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.server}/api/jobseeker_users`);
  }

  update(values: Client): Observable<any> {
    return this.http.put<any>(`${this.server}/api/jobseeker_users`, JSON.stringify(values));
  }
}
