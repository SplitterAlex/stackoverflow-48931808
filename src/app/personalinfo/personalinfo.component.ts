import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../shared/form/form.component';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  @ViewChild(FormComponent) formComp: FormComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');
    this.formComp.fgd.onSubmit(null);
    if (!this.formComp.form.valid) {
      return;
    }

    console.log('Ready to make an ajax call: ', this.formComp.form.getRawValue());
  }

}
