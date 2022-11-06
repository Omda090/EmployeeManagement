import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../Shared/models/Employee.model';
// import { Employee } from 'src/Shared/models/employee.model';










import { SharedService } from 'src/Shared/Services/shared.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
 employeeData : Employee = new Employee();

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }
 onSave(form :NgForm) {
  console.log("form",form)
  this.service.addEmpolyeeResponse(form.value).subscribe(
    res => {
      alert('Created Successfully')
    },
    err => {
      alert('Error Inserting Data')
    }
  )
 }
}
