import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3 class="title">I'm in the AppComponent!</h3>

      <app-servers></app-servers>
    </div>
  </div>
  </div>

  `,
  styles: [`

  div {
    text-align: center;
  }
  
  .title {
    border-color: cyan;
  }
  

  `]
})
export class AppComponent {

  public message;
  
  // public name = "John Smith"
 
  name = "Monica";
  title = "Angular-app";
}
