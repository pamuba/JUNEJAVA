import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor(private _http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{

    return this._http.get<IEmployee[]>(this._url)
  }
}
