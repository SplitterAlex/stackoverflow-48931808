import { Component, ViewChild, Optional } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild(FormGroupDirective) fgd: FormGroupDirective;

  public form: FormGroup;

  get emailCtrl() {
    return this.form.get('email');
  }


  constructor(private fb: FormBuilder,
              @Optional() fgdParent: FormGroupDirective) {
    this.createForm();
    if (fgdParent) {
      fgdParent.ngSubmit.subscribe(
        data => {
          console.log('Subscribe Event From Parent received');
          this.fgd.onSubmit(null);
        }
      );
    }
   }


   createForm() {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });
  }

}
