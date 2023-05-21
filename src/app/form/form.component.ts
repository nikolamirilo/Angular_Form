import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  public loginForm: FormGroup;
  public submitted = false;
  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      fullName: ["", [Validators.required], Validators.minLength(3)],
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.pattern(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/gm)]],
      confirmPassword: ["", [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    }),
    {validators: [this.checkIfPasswordsMatch("password", "confirmPassword")]}
  }

  public checkIfPasswordsMatch(password: string, confirmPassword: string):any{
    return (controls: AbstractControl)=>{

    }
  }
  public submitLoginForm(): void{
    this.submitted=true
    if(this.loginForm.invalid){
      return;
    }else{
      if(this.loginForm.controls.password.value != this.loginForm.controls.confirmPassword.value){
        alert("Password and Confirm Password doesn't match")
        return;
      }else{
        alert("Form Submited")
      }
    }
  }
  public resetLoginForm(): void{
    this.submitted=false;
    this.loginForm.reset()
  }
  public get form():any{
    return this.loginForm.controls
  }
}