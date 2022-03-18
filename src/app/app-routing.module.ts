import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordFormComponent } from './components/password-form/password-form.component';

const routes: Routes = [
  { path: '', component: PasswordFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
