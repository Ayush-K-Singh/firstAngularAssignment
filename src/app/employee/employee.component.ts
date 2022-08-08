import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from 
'@angular/forms';

@Component({
   selector: 'app-employee',
   templateUrl: './employee.component.html',
   styleUrls: ['./employee.component.html']
})

export class EmployeeComponent  {
  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
  }

  show=false
}
