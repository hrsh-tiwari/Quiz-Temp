import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealtimeresultService {

  constructor() { }
  getResults(){
   return [
   {username:"Shubhanshu",date:"12 Oct 2020",marks:6},
   {username:"Sorav",date:'14 Oct 2020',marks:2},
   {username:"Amit",date:'17 Oct 2020',marks:7},
   {username:"Jai",date:'17 Oct 2020',marks:1},
   {username:"Prakhar",date:'20 Oct 2020',marks:4},
   {username:"Anirudh",date:'21 Oct 2020',marks:7}
   


  
   ];
  }
}
