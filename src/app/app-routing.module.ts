import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';

import { HomeComponent } from './views/home.component';
import { ApplicantComponent } from './jobseeker_applicant/jobseeker_applicant.component';
import { LoginComponent } from './views/login.component';
import { VerifyComponent } from './views/verify.component';
//import { CompanyUserComponent } from './companyUser/companyUser.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const notLoggedIn = () => map(user => user ? ['home'] : true);

const routes: Routes = [
  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  //{ path: 'companyUser', loadChildren: () => import('./companyUser/companyUser.module').then(m => m.CompanyUserModule) },
  //{ path: 'compUser/:id', component: CompanyUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: notLoggedIn } },
  { path: 'verify', component: VerifyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: !notLoggedIn } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'companyprof', component: CompanyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
