import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Angular App</h1>
    <employee-list></employee-list>
    <hr>
    <employee-detail></employee-detail>
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

  public message;

  public name = "John Smith"
  title = 'angular9';
}
