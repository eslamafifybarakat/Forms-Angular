import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  myFirstName = "1st name";
  myLastName = "2st name";
  @ViewChild('myForm') myForm: any;
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(formValue: any){
  //   console.log("Form Value is: ", formValue);
  // }

  onSubmit(){
    console.log("Form Value is: ", this.myForm?.value);
    setTimeout(() => {
      this.myForm?.reset();
    }, 500);
  }

}
