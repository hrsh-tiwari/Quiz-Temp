import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {PasswordStrengthComponent} from './password-strength/password-strength.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {CountdownModule} from 'ngx-countdown';
import {LoginComponent} from './login/login.component';
import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPwdService } from './services/forgot-pwd.service';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents,
    OtpVerificationComponent,
    ResetSuccessComponent,
    ForgotPasswordComponent,PasswordStrengthComponent,ResetPasswordComponent,LoginComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path : 'forgotten-password',  
        component : ForgotPasswordComponent   
    },{  
      path : 'otp-verify',  
      component : OtpVerificationComponent    
    },{  
      path : 'reset-pwd',  
      component : ResetPasswordComponent    
    } ,
    {  
      path : 'reset-success',  
      component : ResetSuccessComponent    
    } 
  ])
  ,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,CountdownModule,HttpModule],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ForgotPwdService,
      // provider used to create fake backend
      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
