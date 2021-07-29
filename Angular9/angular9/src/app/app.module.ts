import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { StructuralComponent } from './structural/structural.component';
import { CommunicatonComponent } from './communicaton/communicaton.component';
import { GreetComponentComponent } from './greet-component/greet-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';




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
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    routingComponents,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

