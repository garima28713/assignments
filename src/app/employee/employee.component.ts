import { Component } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  showEdit: boolean = true;
  employeeData: Employee[] = [
    {
      employeeID: 1,
      firstName: 'Garima',
      lastName: 'Sharma',
      salary: '50000',
      dob: '28-11-1996',
      email: 'garimaa.sharma@tcs.com',
      action: true,
    },
  ];

  editEmp() {
    this.showEdit = false;
  }
  updateEmp() {
    this.showEdit = !this.showEdit;
  }
}
