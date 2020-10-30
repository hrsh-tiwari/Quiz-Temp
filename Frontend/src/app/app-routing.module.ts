import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home';
// import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';

const routes: Routes = [
 { path:"",redirectTo:"/registration",pathMatch:"full"},
 {
   path:"registration",component:RegistrationComponent}
   ,{path:"login",component:LoginComponent}
   ,{path: "home", component:HomeComponent}
  //  ,{path:"forgotten-password", component:ForgotPasswordComponent
  //  },{  path : 'otp-verify',  component : OtpVerificationComponent},
  //  { path : 'reset-pwd',component : ResetPasswordComponent } ,
  // {path : 'reset-success',component : ResetSuccessComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,ForgotPasswordComponent,LoginComponent, HomeComponent]
