import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(private _employeeService: EmployeeService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExist = !!this._employeeService.getEmployeeById(+route.paramMap.get('id'));

    if(employeeExist) {
      return true;
    } else {
      this._router.navigate(['notfound'])
      return false;
    }
  }
}
