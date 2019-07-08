import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.css']
})
export class FormNameComponent  {

  name = 'Your Entry';
  @Output() nameToParent = new EventEmitter <string>();

  sendName() {
    this.nameToParent.emit(this.name);
  }

  constructor() { }


}
