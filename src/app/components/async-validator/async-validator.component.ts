import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { usernameValidator } from './async.validator';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.scss']
})
export class AsyncValidatorComponent implements OnInit {

  myform!: FormGroup;
  username!: FormControl;
  lazyUsername!: FormControl;

  constructor() {
    this.initFormControls();
    this.createForm();
  }

  //Initail Form Controls
  initFormControls() {
    this.username = new FormControl('', [Validators.required], [usernameValidator()]);
    // Lazy Check
    this.lazyUsername = new FormControl('',{
      validators: [Validators.required],
      asyncValidators:[usernameValidator()],
      updateOn: 'blur'
    });
  }

  //Create Form
  createForm() {
    this.myform = new FormGroup({
      username: this.username,
      lazyUsername: this.lazyUsername
    })
  }

  ngOnInit(): void {
  }

}
