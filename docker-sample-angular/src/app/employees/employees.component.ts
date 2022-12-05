import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/iemployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers:  [ EmployeeService ]
})
export class EmployeesComponent {
  employees: [IEmployee] | undefined;

  constructor(private service: EmployeeService){
    
    const data = this.service.getAll().subscribe((data: [IEmployee]) => {
      this.employees = [ ...data ]
      console.log('employees',  this.employees);

    });
    
  }

}
