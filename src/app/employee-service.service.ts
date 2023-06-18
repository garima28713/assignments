import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){
    return [{
      id:1,
      employee_name:'garima',
      employee_age:'22',
      employee_salary:100000,
      profile_image: null
    }]
  }
}
