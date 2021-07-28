export interface Employee{
  employeeName: string;
  employeeAge: number;
  employeeDept?: string;
  employeeDeptId: number;

}

export interface Department {
  deptId:number;
  deptName: string;
}
