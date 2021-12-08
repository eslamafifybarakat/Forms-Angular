import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";


export function validatePassword(nameRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value.match(nameRegExp)) {
      return {
        invalidPassword: true,
      }
    }
    return null;
  };
}

// export function validatePasswords(formGroup: FormGroup): { [key: string]: boolean } | any {
//   console.log("invalid password: ", formGroup);
//     return {wrongPassword:true };
//   };

export function validatePasswords(formGroup: FormGroup): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value.password !== control.value.confirmPassword) {
      return { passwordsNotMatch: true }
    }
    return null;
  };
}



