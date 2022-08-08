import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  employee = [
    {fName:"ayush",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"amit",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"aaryan",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"ajay",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"Deepak",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'}
  ]

  show = false;
}
