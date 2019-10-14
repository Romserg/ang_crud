import { Employee } from "../models/employee.model";

export class ResolvedEmployeelist {
  constructor(public employeeList: Employee[], public error: any = null) {}
}
