import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `<div>
    <h2>The Child Component</h2>
  
    Welcome : {{name}}<br>
    {{2+2}}<br>
    {{name.length}}
    {{name.toUpperCase()}}
    {{ this.fn() }}
    
  <div>`,
  styles: [`
  `]
})
export class ChildComponent implements OnInit {

  public name = "John Wick"
  constructor() { }

  ngOnInit(): void {
  }

  fn(){
    return "String from hello()"
  }

}
