import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/list', pathMatch: 'full'},
	{path: 'list', component: ListEmployeesComponent},
	{path: 'create', component: CreateEmployeeComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		ListEmployeesComponent,
		CreateEmployeeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
    FormsModule,
		BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
