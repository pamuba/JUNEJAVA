import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { StructuralComponent } from './structural/structural.component';
import { CommunicatonComponent } from './communicaton/communicaton.component';
import { GreetComponentComponent } from './greet-component/greet-component.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    StructuralComponent,
    CommunicatonComponent,
    GreetComponentComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
