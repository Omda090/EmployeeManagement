import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/Shared/models/employee.model';
import { SharedService } from 'src/Shared/Services/shared.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeData : Employee = new Employee();
   id:any;

  constructor(public service:SharedService,public route:ActivatedRoute,private toastr: ToastrService) { }

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
  onUpdate(UpdateEmployee:NgForm) {
    return this.service.UpdateEmpolyee(UpdateEmployee,UpdateEmployee.value.id).subscribe(response => {
   ;



      },
      error => {error}
    );
  }
}
