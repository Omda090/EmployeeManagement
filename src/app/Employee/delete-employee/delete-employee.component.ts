import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Employee } from 'src/Shared/models/employee.model';
import { Employee } from '../../../Shared/models/Employee.model';


import { SharedService } from 'src/Shared/Services/shared.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeData : Employee = new Employee();
  id:any;
  constructor(public service:SharedService,public route:ActivatedRoute,private navigation:Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {

      this.id  =paramMap.get('id');
      console.log(this.id);
      this.PreviewDetails(this.id);
  })
  }



  PreviewDetails(id:number){
    this.service.getEmpolyeesById(id).subscribe((res: any) => {
      this.employeeData= res as Employee;

    })

  }

  onDelete(UpdateEmployee:NgForm) {

    return this.service.deleteEmpolyee(UpdateEmployee.value.id).subscribe(
      respo => {
        alert('employee delete')
      this.navigation.navigateByUrl("employees")

      },
      error => {  alert('sothing went wrong') }
    );

  }

}
