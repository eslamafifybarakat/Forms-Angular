import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  title = 'Reactive Forms';
  Form_Control = '** Form Control **';
  Form_Group = '** Form Group **';

  name = new FormControl();

  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
    }),
  });

  constructor() {
    this.name.valueChanges.subscribe((changes) => {
      console.log('Changes is: ', changes);
    });
  }

  ngOnInit(): void {}

  updateName() {
    this.name.setValue('Eslam Afify Barakat');
  }

  resetName() {
    this.name.setValue('');
  }

  onSubmit() {
    // console.log(this.profileForm.value);
    window.alert(JSON.stringify(this.profileForm?.value));
    this.profileForm.reset();
  }
  //SetValue must set all states for formGroup
  updateFormWithSetValue() {
    this.profileForm.reset();
    this.profileForm.setValue({
      firstName: 'Eslam',
      lastName: 'Afify',
      address: {
        city: 'Sirs-Eliaan',
        street: '123',
      },
    });
  }
  //PatchValue must set all states for formGroup is most popular
  updateFormWithPatchValue() {
    this.profileForm.reset();
    this.profileForm.patchValue({
      firstName: 'Eslam',
      address: {
        city: 'Sirs-Eliaan',
      },
    });
  }

  reset() {
    this.profileForm.reset();
  }
}
