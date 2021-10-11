import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {environment} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private httpClient : HttpClient) {

  }


  public getEmployees() : Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(this.apiServeUrl + '/employee/api/list');
  }

  public addEmployee(employee : Employee) : Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiServeUrl + '/employee/api/save/', employee);
  }

  public updateEmployee(employee : Employee) : Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiServeUrl + '/employee/api/update/', employee);
  }

  public deleteEmployee(employeeId : number) : Observable<void> {
    return this.httpClient.delete<void>(this.apiServeUrl + '/employee/api/delete/'+ employeeId);
  }

}
