import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantListComponent } from './plant-list/plant-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DepotListComponent } from './depot-list/depot-list.component';
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantUpdateComponent } from './plant-update/plant-update.component';
import { DepotCreateComponent } from './depot-create/depot-create.component';
import { DepotUpdateComponent } from './depot-update/depot-update.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { HandlingcostListComponent } from './handlingcost-list/handlingcost-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    PlantListComponent,
    ProductListComponent,
    DepotListComponent,
    PlantCreateComponent,
    PlantUpdateComponent,
    DepotCreateComponent,
    DepotUpdateComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    InterestListComponent,
    HandlingcostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
