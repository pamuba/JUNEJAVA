import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'propertybinding',
  template: `
  <div>
    <h1>Property Binding</h1>
    <input [id]="myId" type="text" value="Angular">
    <input id="{{myId}}" type="text" value="Angular">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Angular">
  </div>
  `,
  styles: [``]
})
export class PropertybindingComponent implements OnInit {

  public myId = "testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
