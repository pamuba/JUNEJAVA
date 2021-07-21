import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Angular App</h1>
    <communicaton (childEvent)="message=$event" [parentData]="name"></communicaton>
    <hr>
    <h2>{{message}}</h2>
    <greet>
      <h1>Hello World For Content Projection</h1>
      <button>Login</button>
      <p>Sending in HTML Content</p>
    </greet>
    <hr>
    <pipes></pipes>
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
