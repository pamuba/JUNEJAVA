import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stylebinding',
  template: `
    <div>
      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color]="hasError ? 'red' : 'orange'">Style Binding</h2>
      <h2 [style.color]="clr">Style Binding</h2>
    </div>
  `,
  styles: [`
  `]
})
export class StylebindingComponent implements OnInit {

  public clr = "purple"
  public hasError = true
  constructor() { }

  ngOnInit(): void {
  }

}
