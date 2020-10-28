import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';  
import { ConfirmedValidator } from './confirmed.validator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {

  constructor(private http: HttpClient,private fb: FormBuilder, private _router: Router) {
  
    
  }

  
  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
  public barLabel: string = "Password strength:";
  resetSuccess=false;
  form: FormGroup = new FormGroup({});
  
  
    
  get f(){
    return this.form.controls;
  }
  onConfirm(data: {password: string}){
    console.log(this.form.value);
    this.resetSuccess=true;
    this.http.post('https://ng-complete-guide-1585c.firebaseio.com/password.json',data).subscribe(responseData =>
     {console.log(responseData);});
     
    

 
    }
 onCancel(){
   this._router.navigate(['/login']);
 }
 onLogin(){
  this._router.navigate(['/login']);
 }
  
   
}
