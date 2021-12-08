import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-form-bulider',
  templateUrl: './reactive-form-form-bulider.component.html',
  styleUrls: ['./reactive-form-form-bulider.component.scss'],
})
export class ReactiveFormFormBuliderComponent implements OnInit {
  title = 'Reactive Forms (Form Bulider)';

  profileForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: this.fb.group({
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ],
        ],
      }),
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
      }),
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
        // Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g)],
      ],
      email: [
        '',
        [
          Validators.required,
          // Validators.pattern('.*com$')
          Validators.pattern(this.emailPattern),
        ],
      ],
    });
    this.profileForm.valueChanges.subscribe((changes) => {
      if (this.hasNumbers(changes?.fullName['firstName'])) {
        this.profileForm.patchValue({
          fullName: {
            firstName: changes?.fullName['firstName']?.replace(/[0-9]+$/g, ''),
          },
        });
      }

      if (this.hasNumbers(changes?.fullName['lastName'])) {
        this.profileForm.patchValue({
          fullName: {
            lastName: changes?.fullName['lastName']?.replace(/[0-9]+$/g, ''),
          },
        });
      }

      if (isNaN(changes?.mobileNumber)) {
        this.profileForm?.patchValue({
          mobileNumber: changes?.mobileNumber?.replace(/[a-zA-Z]+$/g, ''),
        });
      }
    });
  }

  ngOnInit(): void {}

  get firstName() {
    return this.profileForm?.get('fullName')?.get('firstName');
  }

  get lastName() {
    return this.profileForm?.get('fullName')?.get('lastName');
  }

  get city() {
    return this.profileForm?.get('address')?.get('city');
  }

  get street() {
    return this.profileForm?.get('address')?.get('street');
  }

  get mobileNumber() {
    return this.profileForm?.get('mobileNumber');
  }

  get email() {
    return this.profileForm?.get('email');
  }

  onSubmit() {
    if (this.profileForm?.valid) {
      console.log('form submitted');
      this.profileForm?.patchValue({
        mobileNumber: `+20 ${this.profileForm?.value['mobileNumber']}`,
      });

      console.log(this.profileForm?.value);
      window.alert(JSON.stringify(this.profileForm?.value));
      this.profileForm?.reset();
    } else {
      this.validateAllFormFields(this.profileForm);
    }
  }
  reset() {
    this.profileForm?.reset();
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

  hasNumbers(t: any) {
    var regex = /\d+$/g;
    return regex.test(t);
  }
}
