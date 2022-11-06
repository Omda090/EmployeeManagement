import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'create-employee' , component : CreateEmployeeComponent},
  {path : 'employees' , component : EmployeesComponent},
  {path : 'Update-Employee/:id' , component : UpdateEmployeeComponent},
  {path : 'DeleteEmployee/:id' , component : DeleteEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
