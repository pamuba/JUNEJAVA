import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dep-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepListComponent implements OnInit {

  departments = [
    {"id":1, "name":"AngularJS"},
    {"id":2, "name":"React JS"},
    {"id":3, "name":"Vue JS"},
    {"id":4, "name":"Ruby Lang"},
    {"id":5, "name":"MongoDB"},
    {"id":6, "name":"BootStrap"},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }

}
