import { FormComponent } from './../shared/form/form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

 @ViewChild(FormComponent) childForm: FormComponent;

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

  ngOnInit() {}

  ngAfterViewInit() {
    this.contactForm.addControl('personalInfo', this.childForm.form);
    this.childForm.form.setParent(this.contactForm);
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    console.log('Contact Form is Valid!', this.contactForm.getRawValue());
  }
}
