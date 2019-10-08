import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
	previewPhoto = false;
	dateOfBirth: Date = new Date(2018,0,30);
	datePickerConfig: Partial<BsDatepickerConfig>;
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
				minDate: new Date(1900,0,1),
				maxDate: new Date(2019,11,31),
				dateInputFormat: 'DD/MM/YYYY',

			})
	}

	ngOnInit() {
	}

	saveEmployee(empForm: NgForm): void {
		console.log(empForm.value)
	}

	togglePhotoPreview(){
		this.previewPhoto = !this.previewPhoto;
	}

}
