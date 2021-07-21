import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greet',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  `]
})
export class GreetComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
