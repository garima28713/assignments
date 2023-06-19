import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee2 } from './interfaces/employee2.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private baseUrl = 'https://dummy.restapiexample.com/api/v1/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee2[]> {
    return this.httpClient.get<Employee2[]>(this.baseUrl).pipe(
      catchError((err: HttpErrorResponse) =>this.handleError(err))
    );
  }

  handleError(err: HttpErrorResponse){
    return throwError(err.message);
  }
}
