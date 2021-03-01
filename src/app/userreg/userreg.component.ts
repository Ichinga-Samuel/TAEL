import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, AbstractControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersService} from "../userservice/users.service";

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  urf: FormGroup; // User registration form
  constructor(private US: UsersService, fb: FormBuilder) {
    this.urf = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'copassword': ['', Validators.compose([Validators.required, this.confirmPassword])]
    })
  }

  confirmPassword(fc: FormControl): {[s: string]: boolean}{
    if(this.urf.controls.password.value === this.urf.controls.copassword.value){
      return {pwdMatch: true}
    }
    return {pwdMatch: false}
  }
  createUser(data){
    data = JSON.stringify(data);
    let up = this.US.createUser(data);
    up.subscribe(val => console.log(val))
  }

  ngOnInit(): void {
  }

}
