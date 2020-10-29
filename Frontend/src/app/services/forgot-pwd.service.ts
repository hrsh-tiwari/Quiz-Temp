import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';  
import { Observable } from 'rxjs';  
import { Router } from '@angular/router';  
import { EmailDetail } from '../classes/email-detail';
import { OtpDetail } from '../classes/otp-detail';
import { ResetPwdDetail } from '../classes/reset-pwd-detail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jsonpFactory } from '@angular/http/src/http_module';
  
//import { JwtHelperService } from '@auth0/angular-jwt';  
  
@Injectable({  
  providedIn: 'root'
})  
export class ForgotPwdService {  
  
  // Base URL  
  private  baseUrl = "http://localhost:8080/";  
  
    
  
  constructor(private http: HttpClient, private router : Router) { }  
  
  saveAdminDetails(email : EmailDetail) : Observable<any>  
  {  
      let url = this.baseUrl + "forgot-password";  
      // console.log(email)
      // return this.http.post("http://localhost:8080/forgot-password", JSON.stringify(email), {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
      return this.http.post<any>("http://localhost:8080/forgot-password",JSON.stringify(email));  
  }  
  verifyOtp(token : OtpDetail) : Observable<any>
  {
    let url = this.baseUrl + "verify-otp";  
      return this.http.post(url,token); 


  }
  resetDetail(resetPwdDetail : ResetPwdDetail) : Observable<any>
  {
    let url = this.baseUrl + "forgot-password";  
      return this.http.post(url,resetPwdDetail); 


  }
    
}  