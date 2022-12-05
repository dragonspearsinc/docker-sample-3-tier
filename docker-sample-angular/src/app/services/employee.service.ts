import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './iemployee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[IEmployee]>('http://localhost:8080/api/employees/', {observe: 'body', responseType: 'json'});
  }

}
