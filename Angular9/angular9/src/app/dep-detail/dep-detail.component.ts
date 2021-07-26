import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dep-detail',
  template: `
    <div>
      <h3>You selected the id: {{id}}</h3>
    </div>
  `,
  styles: [
  ]
})
export class DepDetailComponent implements OnInit {

  public id:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
