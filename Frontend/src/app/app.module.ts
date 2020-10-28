import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import {PasswordStrengthComponent} from './password-strength/password-strength.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {CountdownModule} from 'ngx-countdown';
import {LoginComponent} from './login/login.component';
import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents,
    ForgottenPasswordComponent,PasswordStrengthComponent,ResetPasswordComponent,LoginComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,CountdownModule],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
