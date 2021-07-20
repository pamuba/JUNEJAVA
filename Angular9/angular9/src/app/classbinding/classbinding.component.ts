import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classbinding',
  template: `
    <div>
      <h2 class="text-success">Hello World</h2>
      <h2 [class]="successClass">Hello World</h2>
      <h2 [class]="successClass" class="text-danger">Hello World</h2>
      <h2 [class.text-danger]="hasError">Hello World</h2>
      <h2 [ngClass]="messageClasses">Hello World</h2>
    </div>
  `,
  styles: [`
  
    .text-success{
      color:green
    }
    .text-danger{
      color:red
    }
    .text-special{
      font-style:italic
    }

  
  `]
})
export class ClassbindingComponent implements OnInit {

  public successClass = "text-success"
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
