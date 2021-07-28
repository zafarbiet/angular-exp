import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeData } from './Employee/employee-data';
export class AppData implements InMemoryDbService {
  createDb() {
     const employee = EmployeeData.employees;
     const department = EmployeeData.departments;
     return {employee, department};
  }
}
