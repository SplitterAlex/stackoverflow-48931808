import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z6">
      <span>Awesome Form Example</span>

      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>

      <button mat-button routerLink="subscribe">Subscribe</button>
      <button mat-button routerLink="contact">Contact</button>
    </mat-toolbar>
    <router-outlet><router-outlet>
  `,
  styles: [`
    .example-fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {
}
