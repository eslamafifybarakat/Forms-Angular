import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  schoolForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.schoolForm = this.createFormItem('init');
  }
  ngOnInit(): void {}

  /*========== Get Class Rooms ==========*/
  getClassRooms(): FormArray {
    return this.schoolForm.get('classRooms') as FormArray;
  }
  /*========== Add Class Rooms ==========*/
  addClassRoom() {
    this.getClassRooms().push(this.createFormItem('classRoom'));
  }
  /*========== Delete Class Rooms ==========*/
  deleteClassRoom(classRoomIndex: number) {
    this.getClassRooms().removeAt(classRoomIndex);
  }
  /*======== Get Class Room Subjects ========*/
  getClassRoomSubjects(classRoomIndex: number): FormArray {
    return this.getClassRooms().at(classRoomIndex).get('subjects') as FormArray;
  }
  /*======== Add Class Room Subjects ========*/
  addClassRoomSubjects(classRoomIndex: number) {
    this.getClassRoomSubjects(classRoomIndex).push(
      this.createFormItem('subject')
    );
  }
  /*===== Delete Class Room Subjects =====*/
  deleteClassRoomSubjects(classRoomIndex: number, subjectIndex: number) {
    this.getClassRoomSubjects(classRoomIndex).removeAt(subjectIndex);
  }

  /**
  *
  *
  * @param itemType for making a daynamic form
  :it can be init | classRooms | subject
  * @return FormGroup
  */

    /*========== Create Form ==========*/
  createFormItem(itemType: string): FormGroup {
    let formItem = this.fb.group({});
    switch (itemType) {
      case 'init':
        formItem = this.fb.group({
          schoolName: '',
          totalStudentsCount: '',
          classRooms: this.fb.array([]),
        });
        break;
      case 'classRoom':
        formItem = this.fb.group({
          studentsCount: '',
          classRoomNumber: '',
          subjects: this.fb.array([]),
        });
        break;
      case 'subject':
        formItem = this.fb.group({
          subjectName: '',
          studentsCount: '',
        });
        break;
    }
    return formItem;
  }
  /*========== Reset Form ==========*/

  restForm(){
    this.schoolForm.reset();
  }
  /*========== Update ==========*/
  updateData(){
    const updateData = {
      schoolName: 'school name',
      totalStudentsCount: 10,
      classRooms: [
        {
          studentsCount: 20,
          classRoomNumber: 1,
          subjects: [
            {
              subjectName: 'subject name1',
              studentsCount: 10,
            },
          ],
        },
        {
          studentsCount: 30,
          classRoomNumber: 2,
          subjects: [
            {
              subjectName: 'subject name1',
              studentsCount: 20,
            },
            {
              subjectName: 'subject name2',
              studentsCount: 40,
            }
          ],
        }
      ],
    };

    for (let i = 0; i <updateData.classRooms.length; i++) {
      this.addClassRoom();
      for (const subject of updateData.classRooms[i].subjects) {
        this.addClassRoomSubjects(i);
      }
      this.schoolForm.patchValue(updateData);
    }
  }
  /*========== Disable Specific Control ==========*/
  disable(){
    this.schoolForm.get('schoolName')?.disable();
  }
  enable(){
    this.schoolForm.get('schoolName')?.enable();
  }
}
