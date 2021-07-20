import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Angular App</h1>
    <stylebinding></stylebinding>
  </div>
  `,
  styles: [`
  
  div{
    color:blue;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }

  `]
})
export class AppComponent {
  title = 'angular9';
}
