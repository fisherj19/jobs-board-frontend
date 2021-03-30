import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';

import { HomeComponent } from './views/home.component';
import { ApplicantComponent } from './jobseeker_applicant/jobseeker_applicant.component';
import { LoginComponent } from './views/login.component';
import { VerifyComponent } from './views/verify.component';
import { JsProfileComponent } from './js_profile/js_profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const notLoggedIn = () => map(user => user ? ['home'] : true);

const routes: Routes = [
  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'js_profile', component: JsProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: notLoggedIn } },
  { path: 'verify', component: VerifyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: !notLoggedIn } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
