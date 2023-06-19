import { Component, OnInit } from '@angular/core';
import { Employee2 } from '../interfaces/employee2.interface';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css'],
})
export class NewemployeeComponent implements OnInit {
  employeeData: Employee2[] = [];

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response:any) => {
      if(response.status==='success'){
        this.employeeData= response.data
      }
    });
  }
}
