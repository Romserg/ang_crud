import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from "@angular/router";
import { ResolvedEmployeelist } from "./resolved-employeelist.model";

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  error: string;
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

  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolvedEmployeeList: ResolvedEmployeelist = this._route.snapshot.data['employeeList'];
    if(resolvedEmployeeList.error === null) {
      this.employees = resolvedEmployeeList.employeeList
    } else {
      this.error = resolvedEmployeeList.error;
    }
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm')
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if(i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }

  ngOnInit() {
  }
}
