//FormControl, FormGroup & FormArray are getting from AbstractControl
import { AbstractControl, ValidatorFn } from "@angular/forms";


// export function validName(control: AbstractControl) : { [key:string]:boolean }| null {
//   console.log("fn:", control);
//   if (control.value.match(/[0-9]/g)) {
//     return {
//       invalidName: true
//     }
//   }
//   return null;
// }
export function validName(nameRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value.match(nameRegExp)) {
      return {
        invalidName: true
      }
    }
    return null;
  };
}
