import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  templateUrl: './employee-page.component.html',
  selector: 'employee-page'
})

export class EmployeePage implements OnInit, OnDestroy {
  public employeeListAll: Employee[];
  public employeeWithDepartment: Employee;
  public subscription = new Subscription();
  constructor(public employeeService: EmployeeService){
    this.employeeListAll=[];
    this.employeeWithDepartment = <Employee>{};
    this.getEmployeeAll();
  }

  getEmployeeAll() {
    this.subscription.add(
      this.employeeService.employees$.
      subscribe(result =>{
        this.employeeListAll = result;
      })
    )
  }

  OnSelected(name:string){
    this.employeeService.changeEmployeeSelected(name);
  }

  employeeResult = this.employeeService.employees$;



  ngOnInit() {

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
