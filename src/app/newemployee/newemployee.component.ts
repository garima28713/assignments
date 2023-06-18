import { Component } from '@angular/core';
import { Employee2 } from '../interfaces/employee2.interface';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent {

  employeeData: Employee2[]=[];
  
}
