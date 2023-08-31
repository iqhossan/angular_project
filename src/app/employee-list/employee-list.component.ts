import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];
  
	page:number=1;
	pageSize:number=1;
  collectionSize:number=4;

  constructor(private employeeService: EmployeeService,
    private router:Router) {
    this.employees = [];
  }
  
  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      });
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id:number){
     this.employeeService.deleteEmployee(id).subscribe(
      data=>{
        console.log(data);
        this.getEmployee();
      },
      error => console.log(error));
  }

  EmployeeDetails(id:number){
    this.router.navigate(['employee-details',id])
  }

  refreshEmployees(){

  }

}
