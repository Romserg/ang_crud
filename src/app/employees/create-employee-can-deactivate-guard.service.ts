import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Observable } from "rxjs";

@Injectable()

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.createEmployeeForm.dirty) {
      return confirm('A you sure you want to discard your changes?')
    }
    return true;
  }
}
