import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css',]
})

export class ForgottenPasswordComponent implements OnInit {  
  
  
      
  public barLabel: string = "Password strength:";  
          
  show = false;
  forgottenPasswordForm: FormGroup;
  resetPasswordForm: FormGroup;
  otpVerificationForm: FormGroup;
  emailField=false;
  emailAddress='';
  hide=true;
allowResendOTP=false;
  
  
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.forgottenPasswordForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email])
    });

    this.otpVerificationForm = new FormGroup({
      'otp': new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{6}$")])
    });
  

    
    
  }
  onSubmit(data: {email: string}){
    this.show=true;
    this.emailField=true;
    this.http.post('https://ng-complete-guide-1585c.firebaseio.com/emails.json',data).subscribe(responseData =>
     {console.log(responseData);});
     this.http.post('https://ng-complete-guide-1585c.firebaseio.com/tf.json',this.show).subscribe(res =>
     {console.log(res);});
     this.http.get('https://ng-complete-guide-1585c.firebaseio.com/tf.json').subscribe(tfd => {
      console.log(tfd);
     });
    
    setTimeout(() => {
      this.allowResendOTP=true;
    },600000);
  }
  onUpdateEmail(event: any){
    this.emailAddress= (<HTMLInputElement>event.target).value;

  }
  onResend(data: {email: string}){
    this.http.post('https://ng-complete-guide-1585c.firebaseio.com/emails.json',data).subscribe(responseData =>
     {console.log(responseData);});
     this.allowResendOTP=false;
     setTimeout(() => {
      this.allowResendOTP=true;
    },6000);
    

  }
  onClick(email:string,otp:string){
    this.hide=false;
    console.log({email,otp});
    this.http.post('https://ng-complete-guide-1585c.firebaseio.com/otpE.json',{email,otp})
   .subscribe(responseData => {console.log(responseData);});
    
    this.http.get('https://ng-complete-guide-1585c.firebaseio.com/otpE.json').subscribe(otps => {
     console.log(otps);
    });

  }
 onCancel(){
this._router.navigate(['/login']);

 }
 


  

}

