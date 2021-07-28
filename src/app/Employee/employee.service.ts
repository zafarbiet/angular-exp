import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Department, Employee } from "./employee";
import { map, tap } from "rxjs/operators";
import { combineLatest, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  changeEmployeeSelected(name: string) {
    this.employeeSelectedSubject.next(name);
  }

  private employeeUrl = 'api/employee'
  private departmentUrl = 'api/department'

  private employeeSelectedSubject = new Subject<string>();
  public employeeSelectedAction$ = this.employeeSelectedSubject.asObservable();

  constructor(private http: HttpClient) {}

  employees$ = this.http.get<Employee[]>(this.employeeUrl)
  .pipe(tap(
    emp => console.log(JSON.stringify(emp))
  ));

  department$ = this.http.get<Department[]>(this.departmentUrl);


  employeeWithDepartmentName$ =
    combineLatest(
      [this.employees$,
      this.department$]
    )
    .pipe(
      map(([employees, departments]) =>
        employees.map(
          emp => ({
            ...emp,
            employeeDept: departments.find(c => c.deptId === emp.employeeDeptId)?.deptName
          }) as Employee
        )
      )
    )

    selectedEmployee$ =
  combineLatest([
    this.employeeWithDepartmentName$,
    this.employeeSelectedAction$
  ])
  .pipe(map(([employeeWithCategory, selectedCustomerId]) =>
    employeeWithCategory.find(c => c.employeeName === selectedCustomerId)
  ))

}
