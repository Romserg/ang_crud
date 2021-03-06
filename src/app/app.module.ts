import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from "./shared/select-required-validator.directive";
import { ConfirmEqualValidatorDirective } from "./shared/confirm-equal-validator.directive";
import { EmployeeService } from "./employees/employee.service";
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from "./employees/employee-filter.pipe";
import { EmployeeListResolverService } from "./employees/employee-list-resolver.service";
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailGuard } from "./employees/employee-detail.guard";
import { AccordionComponent } from './shared/accordion.component';
import { CreateEmployeeCanDeactivateGuard } from "./employees/create-employee-can-deactivate.guard";

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: {employeeList: EmployeeListResolverService}
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuard]
  },
  {path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [EmployeeDetailGuard]},
  {path: 'notfound', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,  EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
