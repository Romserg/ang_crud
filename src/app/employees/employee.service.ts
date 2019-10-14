import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/1.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: '2345978640',
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/2.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: '5432978640',
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/3.png'
    }
  ];

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
    const uri = 'http://localhost:3000/employees';
    return this.http.get<Employee[]>(uri)
      .pipe(
        catchError(this.handleError)
      );
  }

  getEmployeeById(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxId = this.listEmployees.reduce((e1, e2) => {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id) {
    const i = this.listEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
}
