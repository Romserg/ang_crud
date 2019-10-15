import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from "./employee.service";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailGuard implements CanActivate {
  constructor(private _employeeService: EmployeeService, private _router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._employeeService.getEmployeeById(+next.paramMap.get('id')).pipe(map(employee => {
      const employeeExist = !!employee;

      if (employeeExist) {
        return true;
      } else {
        this._router.navigate(['notfound'])
        return false;
      }
    }),
      catchError((err: any) => {
        console.log(err);
        return of(false);
      }))
  }

}
