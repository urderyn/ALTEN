import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  userInfo = {
    name: '',
    age: '',
  };

  nameSaved: boolean;
  ageSaved: boolean;

  constructor() {
    this.nameSaved = false;
    this.ageSaved = false;
  }

  setName(e) {
    this.userInfo.name = e;
    this.nameSaved = true;
  }

  setAge(e) {
    this.userInfo.age = e;
    this.ageSaved = true;
  }

  redoName(e) {
    this.nameSaved = false;
  }
}
