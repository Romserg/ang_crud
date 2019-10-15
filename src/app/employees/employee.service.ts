import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:3000/employees';

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = `Client Side Error  ${errorResponse.message}`;
      console.error(errorMessage)
    } else {
      errorMessage = `Server Side Error: ${errorResponse.message}`;
      console.error(errorMessage)
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
