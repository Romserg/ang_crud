import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from "./employee.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee => {
      return employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    })
  }

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this._route.queryParamMap.subscribe(queryParams => {
      if (queryParams.has('searchTerm')) {
        this.searchTerm = queryParams.get('searchTerm')
      } else {
        this.filteredEmployees = this.employees;
      }
    });
  }

  changeEmployeeName() {
    this.employees[0].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: {
        'searchTerm': this.searchTerm
      }
    })
  }
}
