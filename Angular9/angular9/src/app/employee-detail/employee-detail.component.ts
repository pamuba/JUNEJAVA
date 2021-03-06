import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <div>
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} {{employee.age}}</li>
    </ul>
  </div>
  `,
  styles: [``]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees()
              .subscribe(data => this.employees = data)
  }

}
