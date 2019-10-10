import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
  ];

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
      })
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee)
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
