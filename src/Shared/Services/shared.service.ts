import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
    providedIn: 'root'
  })
  export class SharedService {
    readonly baseURL = "https://localhost:5001/api/";
    decodeToken : string = "";
    jwtHelper = new JwtHelperService()

    constructor(public http : HttpClient){

    }
    loginResponse(loginDetails: any) {
        return this.http.post(this.baseURL + "UserLogin/login", loginDetails).pipe(
          map((response: any) => {
            const user = response;
            if (user) {
              localStorage.setItem('token', user.token);
              this.decodeToken = this.jwtHelper.decodeToken(user.token);
              // localStorage.setItem('username',this.decodeToken.unique_name);
              // localStorage.setItem('userid',this.decodeToken.nameid);
              console.log('token', this.decodeToken);
            }
          })
        );
      }

      //Employee
      addEmpolyeeResponse(form: any) {
        console.log('Error ' ,form.value);

        return this.http.post(this.baseURL + "Employee/CreateEmployee", form ,{ responseType: "blob" });
      }
      deleteEmpolyee(id: any) {
        return this.http.delete(this.baseURL + "Employee/DeleteEmployee/" + id ,{ responseType: "text" });
      }
      UpdateEmpolyee(form: any, id: any) {
        return this.http.put(this.baseURL + "Employee/UpdateEmployee/" + id, form, { responseType: "blob" });
      }
      getEmpolyees() {
        return this.http.get(this.baseURL + "Employee/Empolyees");
      }

      getEmpolyeesById(id: any) {
        return this.http.get(
          this.baseURL + "Employee/GetEmpById?id=" + id
        );
      }
}

