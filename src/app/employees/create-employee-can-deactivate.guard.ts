import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from "./create-employee.component";

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuard implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('A you sure you want to discard your changes?')
    }
    return true;
  }

}