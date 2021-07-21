import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'communicaton',
  template: `
  <div>
    <h2>{{"Hello "+name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  </div>
  `,
  styles: [`
      
  `]
})
export class CommunicatonComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Data from Child Component");
    console.log("Emitted");
  }

}
