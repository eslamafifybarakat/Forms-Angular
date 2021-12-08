import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validName } from './Validation Form/name.validator';
import {
  validatePassword,
  validatePasswords,
} from './Validation Form/password.validator';

@Component({
  selector: 'app-reactive-form-advanced-way',
  templateUrl: './reactive-form-advanced-way.component.html',
  styleUrls: ['./reactive-form-advanced-way.component.scss'],
})
export class ReactiveFormAdvancedWayComponent implements OnInit {
  title = 'Advanced Buliding Reactive Form';
  passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  myform!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  password!: FormControl;
  confirmPassword!: FormControl;
  matchPaaswords: boolean = false;

  constructor() {
    this.initFormControls();
    this.createForm();
  }

  ngOnInit(): void {}

  //Init Form Controls
  initFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      validName(/[0-9]/g),
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      validName(/[0-9]/g),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      validatePassword(this.passw),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      validatePassword(this.passw),
    ]);
  }
  //Create Form
  createForm() {
    this.myform = new FormGroup(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      validatePasswords(this.myform)
    );
  }

  //validation for All Form Fields
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    // let password = this.myform?.controls?.password?.value;
    // let confirmPassword = this.myform?.controls?.confirmPassword?.value;
    // if (password != confirmPassword) {
    //   this.matchPaaswords = true;
    // } else {
    // }
    if (this.myform?.valid) {
      console.log('form submitted');
      console.log(this.myform?.value);
      window.alert(JSON.stringify(this.myform?.value));
      this.myform?.reset();
    } else {
      this.validateAllFormFields(this.myform);
      console.log('form invalid');
    }
  }
}
