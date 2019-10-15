import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { catchError } from "rxjs/operators";
import { Employee } from "../models/employee.model";

@Injectable()

export class EmployeeListResolverService implements Resolve<Employee[] | string> {
  constructor(private _employeeService: EmployeeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
    return this._employeeService.getEmployees()
      .pipe(
        catchError((error: string) => of(error))
      );
  };
}

