import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessfulPageComponent } from './successful-page/successful-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  // { path: 'login', component: LoginPageComponent},
  { path: 'sign-up', component: SignupPageComponent},
  { path: 'success', component: SuccessfulPageComponent},
  { path: '**', component:PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
