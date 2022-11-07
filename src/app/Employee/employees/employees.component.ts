import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../Shared/models/Employee.model';
import { SharedService } from 'src/Shared/Services/shared.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeDetails : Employee[] = [];
  constructor(public service:SharedService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.showData();
  }
  showData() {
    this.service.getEmpolyees().subscribe(
      (res:any) => {
                this.employeeDetails = res ;
      },
      err => {
        alert('something wrong with retreving data')
      }
    )  }

}
