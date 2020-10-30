import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { ForgotPwdService } from '../services/forgot-pwd.service';  
import { EmailDetail } from '../classes/email-detail';
import { OtpDetail } from '../classes/otp-detail';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private emailDetail = new EmailDetail();  
  private otpDetail = new OtpDetail();  

  constructor(private forgotPwdService : ForgotPwdService, private router : Router) { }

  ngOnInit(): void {
    
  }
  form = new FormGroup({    
    email : new FormControl('' ,[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")] ),      
  });  
  onCancel(){
    this.router.navigate(['/login']);
  }
  
  
  EmailForm(EmailInformation)  
  {     
     {   
        this.emailDetail.emailId = this.Email.value;  
        this.otpDetail.emailId = this.Email.value;
        console.log(this.emailDetail);
        console.log(this.otpDetail);

  
        this.forgotPwdService.saveAdminDetails(this.emailDetail).subscribe(  
          response => {  
              //let result = response.json();  

              //(response) => {
                console.log(response)
                if(response=="SUCCESS"){
                  alert("OTP Generated SUCCESSFULLY")
                  //this.router.navigate(['/login'])
                  this.router.navigateByUrl('/otp-verify',{ state: { email: this.emailDetail.emailId}}); 
                } 
                else {
                  alert("User does not exist!")
                }
                console.log('success',response)},
               (error)=> console.log('error',error)



              //if(result > 0)  
              //{  
                //this.router.navigateByUrl('/otp-verify',{ state: { email: this.emailDetail.emailId}}); 
            //  }  
              //else  
             // {  
               //   alert("Email id is not registered.")  
             // }  
        //  },  
          //error => {  
            //alert("error occur while checking User. please try after sometime.")  
         // }  
        );  
        //to be removed
        // this.router.navigateByUrl('/otp-verify',{ state: { email: this.emailDetail.emailId}});
          
     }    
  }    
  get Email(){  
      return this.form.get('email');  
  }   
  
  
}  
