import { SharedFormComponent } from './../shared/shared-form/shared-form.component';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

 @ViewChild(SharedFormComponent) childForm: SharedFormComponent;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngAfterViewInit() {
    this.contactForm.addControl('personalInfo', this.childForm.form);
    // this.childForm.form.setParent(this.contactForm);
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }
    console.log('Contact Form is Valid!', this.contactForm.getRawValue());
  }

  onReset(fgd: NgForm) {
    fgd.onReset();
    this.childForm.fgd.onReset();
  }
}
