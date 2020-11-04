import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {QuizListComponent} from 'src/app/quiz-list/quiz-list.component';
import { RegisterQuizComponent } from './register-quiz/register-quiz.component';
import { AnlysisResultComponent } from './anlysis-result/anlysis-result.component';
import { AnlysisResultService } from './anlysis-result.service';
import {RealComponent} from 'src/app/real/real.component';
import { PerformanceChartComponent } from 'src/app/performance-chart.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CreateQuizService} from 'src/app/create-quiz.service';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { DisplaySuccessComponent } from './display-success/display-success.component'; 
import {MatTableModule} from '@angular/material/table';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog'; 

import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {HttpModule} from '@angular/http';

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
import { AlertDialog } from './add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlertDialog,
    RegisterQuizComponent,
    AddQuestionsComponent,
    DisplaySuccessComponent,
    QuizListComponent,
    AnlysisResultComponent,
    RealComponent,
    PerformanceChartComponent,
    AppComponent,
    RegistrationComponent,
    routingComponents,
    OtpVerificationComponent,
    ResetSuccessComponent,
    ForgotPasswordComponent,PasswordStrengthComponent,ResetPasswordComponent,LoginComponent,HomeComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    Ng2SearchPipeModule,
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
  ]),
  AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,CountdownModule,HttpModule],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ForgotPwdService, CreateQuizService, AnlysisResultService,
      // provider used to create fake backend
      fakeBackendProvider
    
  ],
  //providers: [CreateQuizService, AnlysisResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
