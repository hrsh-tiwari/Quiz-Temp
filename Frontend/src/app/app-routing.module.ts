import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 { path:"",redirectTo:"/registration",pathMatch:"full"},
 {
   path:"registration",component:RegistrationComponent}
   ,{path:"login",component:LoginComponent}
   ,{path:"forgotten-password", component:ForgottenPasswordComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,ForgottenPasswordComponent,LoginComponent]
