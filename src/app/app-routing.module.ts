import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { DepotListComponent } from './depot-list/depot-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantUpdateComponent } from './plant-update/plant-update.component';
import { DepotUpdateComponent } from './depot-update/depot-update.component';
import { DepotCreateComponent } from './depot-create/depot-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { InterestListComponent } from './interest-list/interest-list.component';

const routes: Routes = [
  {path: 'employees', component:EmployeeListComponent},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: 'update-employee/:id', component:UpdateEmployeeComponent}, 
  {path: 'employee-details/:id', component:EmployeeDetailsComponent},

  {path: 'plants', component:PlantListComponent},
  {path: 'create-plant', component:PlantCreateComponent}, 
  {path: 'update-plant/:id', component:PlantUpdateComponent}, 

  {path: 'depots', component:DepotListComponent},
  {path: 'create-depot', component:DepotCreateComponent}, 
  {path: 'update-depot/:id', component:DepotUpdateComponent}, 

  {path: 'products', component:ProductListComponent},
  {path: 'create-product', component:ProductCreateComponent},
  {path: 'update-product/:id', component:ProductUpdateComponent},
  
  {path: 'rates', component:InterestListComponent}, 
  {path: 'create-rate', component:InterestListComponent}, 
  {path: 'update-rate/:id', component:InterestListComponent}
  

  // {path: '', redirectTo:"employees", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
