import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbonamentiComponent } from './abbonamenti/abbonamenti.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PalestreComponent } from './palestre/palestre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abbonamenti', component: AbbonamentiComponent },
  { path: 'palestre', component: PalestreComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
