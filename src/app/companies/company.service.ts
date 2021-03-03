import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Company {
  id: string;
  name: string;
  primary_first_name: string;
  primary_last_name: string;
  primary_phone: string;
  primary_email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  neighborhood_id: number;
  date_created: Date;
  created_by: string;
  last_updated: Date;
  updated_by: string;
  date_reviewed: Date;
  reviewed_by: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private server = environment.server;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.server}/api/companies`);
  }
}
