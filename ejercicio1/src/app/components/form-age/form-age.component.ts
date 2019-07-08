import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-age',
  templateUrl: './form-age.component.html',
  styleUrls: ['./form-age.component.css']
})
export class FormAgeComponent  {

  age = 'Your Entry';
  @Output() ageToParent = new EventEmitter<string>();
  @Output() resetForm = new EventEmitter();

  constructor() { }

  sendAge() {
    this.ageToParent.emit(this.age);
  }

  toFormName() {
    this.resetForm.emit();
  }

}
