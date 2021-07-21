import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural',
  template: `
    <div>
      <h2 *ngIf="displayName; then thenBlock; else elseBlock">ANGULAR</h2>

      <ng-template #thenBlock>
        <h2>INSIDE FIRST TEMPLATE</h2>
      </ng-template>
      <ng-template #elseBlock>
        <h2>INSIDE SECOND TEMPLATE</h2>
      </ng-template>
      
      <hr>
      <input #val type="text"/><br>
      <button (click)="logMessage(val.value)">LOG</button>

      <hr>

      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'"  [style.color]="'red'">You picked Red</div>
        <div *ngSwitchCase="'blue'"  [style.color]="'blue'">You picked Blue</div>
        <div *ngSwitchCase="'green'"  [style.color]="'green'">You picked Green</div>
        <div *ngSwitchDefault>Pick Again</div>
      </div>

      <hr>

      <div *ngFor="let color of colors">
        <h2 [style.color]="color">{{color}}</h2>
      </div>
    </div>

    




  `,
  styles: [`
  
  `]
})
export class StructuralComponent implements OnInit {

  public displayName = true;
  public color = "pink";
  public colors = ["red", "blue", "green", "yellow"]


  constructor() { }

  ngOnInit(): void {
  }

  logMessage(val){
    console.log(val)
  }

}
