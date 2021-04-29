import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface addJob {
  companyName: string;
  jobName: string;
  jobDescription: string;
  name: string;
  phoneNumber: number;
  email: string;
  listDate: Date;
  fillDate: Date;
}

@Injectable({
    providedIn: 'root'
  })
  export class addJobService {
    private server = environment.server;
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<addJob[]> {
      return this.http.get<addJob[]>(`${this.server}/api/add_job`);
    }
  
    insert(values: addJob): Observable<any> {
      return this.http.post<any>(`${this.server}/api/add_job`, JSON.stringify(values));
    }
  }
  