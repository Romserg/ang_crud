import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { catchError, map } from "rxjs/operators";
import { ResolvedEmployeelist } from "./resolved-employeelist.model";

@Injectable()

export class EmployeeListResolverService implements Resolve<ResolvedEmployeelist> {
  constructor(private _employeeService: EmployeeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeelist> {
    return this._employeeService.getEmployees()
      .pipe(
        map(employeeList => new ResolvedEmployeelist(employeeList)),
        catchError((error: any) => {
          return of(new ResolvedEmployeelist(null, error))
        })
      );
  };
}

