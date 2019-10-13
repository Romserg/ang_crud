import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailGuard implements CanActivate {
  constructor(private _employeeService: EmployeeService, private _router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const employeeExist = !!this._employeeService.getEmployeeById(+next.paramMap.get('id'));

    if(employeeExist) {
      return true;
    } else {
      this._router.navigate(['notfound'])
      return false;
    }
  }

}
