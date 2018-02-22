import { Component, ViewChild } from '@angular/core';
import { SharedFormComponent } from '../shared/shared-form/shared-form.component';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent {

  @ViewChild(SharedFormComponent) formComp: SharedFormComponent;

  onSubmit() {
    this.formComp.fgd.onSubmit(null);
    if (!this.formComp.form.valid) { return; }
    console.log('Ready to make an ajax call: ', this.formComp.form.getRawValue());
  }
}
