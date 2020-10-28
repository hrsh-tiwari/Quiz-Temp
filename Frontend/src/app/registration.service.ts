import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { registerLocaleData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  _url='http://localhost:3000/enroll';

register(userData){
  console.log(userData,"registered");
   return this._http.post<any>(this._url,userData);
   
}
}