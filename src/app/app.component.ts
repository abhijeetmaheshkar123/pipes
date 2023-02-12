import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes1';

TotalMarks:any=120;
  Student:any=[
    {Name:"Abhijeet",Course:"MSc",Marks:65,Percentage:87,DOB:"20-07-1997",Gender:"Male"},
    {Name:"Vishal",Course:"MSc",Marks:70,Percentage:90,DOB:"13-07-1998",Gender:"Male"},
    {Name:"Rutuja",Course:"MSc",Marks:65,Percentage:87,DOB:"13-02-1998",Gender:"Female"},
    {Name:"Netal",Course:"MSc",Marks:89,Percentage:93,DOB:"26-09-1998",Gender:"Female"},
    {Name:"Amar",Course:"MSc",Marks:90,Percentage:95,DOB:"12-12-1998",Gender:"Male"},
    {Name:"Nihal",Course:"MSc",Marks:65,Percentage:87,DOB:"12-07-1998",Gender:"Male"},
    {Name:"Anjali",Course:"MSc",Marks:60,Percentage:77,DOB:"19-07-1997",Gender:"Female"},
  ]
}
