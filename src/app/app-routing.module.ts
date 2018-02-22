import { ContactComponent } from './contact/contact.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'subscribe', component: PersonalinfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/contact', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
