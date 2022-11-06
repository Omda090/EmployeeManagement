import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Shared/models/User.model';
import { SharedService } from 'src/Shared/Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData : User = new User();
  constructor(public service : SharedService , public route:Router) {
  }

  ngOnInit(): void {
  }
  onLogin(form:NgForm){
this.service.loginResponse(form.value).subscribe(
  res => {
      this.route.navigateByUrl('/employees')
  },
  err=> {
     alert('Enter Valid Credintals')
  }
)
  }
}
